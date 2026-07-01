import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.booking.findMany({
      include: { property: true, tasks: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(data: any) {
    const booking = await this.prisma.booking.create({
      data: {
        propertyId: data.propertyId,
        guestName: data.guestName,
        guestEmail: data.guestEmail,
        guestPhone: data.guestPhone,
        checkInDate: new Date(data.checkInDate),
        checkOutDate: new Date(data.checkOutDate),
        amount: data.amount,
        source: data.source,
        guestLink: `gst_${Date.now()}`,
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
