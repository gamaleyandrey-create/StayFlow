import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.booking.findMany({
      include: { property: true, tasks: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { id },
      include: { property: true, tasks: true },
    });

    if (!booking) throw new NotFoundException('Booking not found');

    return booking;
  }

  async create(dto: CreateBookingDto) {
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

    await this.prisma.property.update({
      where: { id: booking.propertyId },
      data: { status: 'OCCUPIED' },
    });

    const cleaningTask = await this.prisma.task.create({
      data: {
        propertyId: booking.propertyId,
        bookingId: booking.id,
        type: 'CLEANING',
        title: `Cleaning after ${booking.guestName}`,
        description: 'Automatically created after checkout',
        date: booking.checkOutDate,
        priority: 'normal',
      },
    });

    return {
      booking,
      cleaningTask,
    };
  }

  cancel(id: string) {
    return this.prisma.booking.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }

  remove(id: string) {
    return this.prisma.booking.delete({
      where: { id },
    });
  }
}
