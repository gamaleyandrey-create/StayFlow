import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.booking.findMany({
      include: { property: true, tasks: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.booking.findUnique({
      where: { id },
      include: { property: true, tasks: true },
    });
  }

  async create(dto: any) {
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
        source: dto.source,
        guestLink: `guest-${Date.now()}`,
      },
    });

    const cleaningTask = await this.prisma.task.create({
      data: {
        propertyId: booking.propertyId,
        bookingId: booking.id,
        type: 'cleaning',
        title: `Cleaning after ${booking.guestName}`,
        description: 'Automatically created after booking checkout',
        date: booking.checkOutDate,
        priority: 'normal',
      },
    });

    return { booking, cleaningTask };
  }
}
