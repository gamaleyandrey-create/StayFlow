import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(user: any) {
    if (user.role === 'ADMIN') {
      return this.prisma.booking.findMany({
        include: { property: true, tasks: true },
        orderBy: { createdAt: 'desc' },
      });
    }

    return this.prisma.booking.findMany({
      where: { property: { companyId: user.companyId } },
      include: { property: true, tasks: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(user: any, id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: { property: true, tasks: true },
    });

    if (!booking) throw new NotFoundException('Booking not found');

    if (user.role !== 'ADMIN' && booking.property.companyId !== user.companyId) {
      throw new ForbiddenException('No access to this booking');
    }

    return booking;
  }

  async create(user: any, dto: any) {
    const property = await this.prisma.property.findUnique({
      where: { id: dto.propertyId },
    });

    if (!property) throw new NotFoundException('Property not found');

    if (user.role !== 'ADMIN' && property.companyId !== user.companyId) {
      throw new ForbiddenException('No access to this property');
    }

    const guestLink = `gst_${Math.random().toString(36).slice(2)}_${Date.now()}`;

    const booking = await this.prisma.booking.create({
      data: {
        propertyId: dto.propertyId,
        guestName: dto.guestName,
        guestEmail: dto.guestEmail,
        guestPhone: dto.guestPhone,
        checkInDate: new Date(dto.checkInDate),
        checkOutDate: new Date(dto.checkOutDate),
        guestsCount: dto.guestsCount,
        amount: dto.amount,
        source: dto.source || 'DIRECT',
        guestLink,
      },
    });

    const cleaningTask = await this.prisma.task.create({
      data: {
        propertyId: booking.propertyId,
        bookingId: booking.id,
        type: 'CLEANING',
        title: `Cleaning after ${booking.guestName}`,
        description: 'Automatically created after checkout',
        date: booking.checkOutDate,
      },
    });

    return { booking, cleaningTask };
  }
}
