import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GuestService {
  constructor(private readonly prisma: PrismaService) {}

  async openGuestLink(guestLink: string) {
    const booking = await this.prisma.booking.findUnique({
      where: { guestLink },
      include: { property: true },
    });

    if (!booking) throw new NotFoundException('Guest link not found');

    return {
      guestName: booking.guestName,
      checkInDate: booking.checkInDate,
      checkOutDate: booking.checkOutDate,
      property: {
        title: booking.property.title,
        address: booking.property.address,
        city: booking.property.city,
        wifiName: booking.property.wifiName,
        wifiPassword: booking.property.wifiPassword,
        doorCode: booking.property.doorCode,
        instructions: booking.property.instructions,
      },
    };
  }

  async reportProblem(guestLink: string, body: any) {
    const booking = await this.prisma.booking.findUnique({
      where: { guestLink },
    });

    if (!booking) throw new NotFoundException('Guest link not found');

    return this.prisma.task.create({
      data: {
        propertyId: booking.propertyId,
        bookingId: booking.id,
        type: 'PROBLEM',
        title: body.title || 'Guest reported problem',
        description: body.description || '',
        status: 'PROBLEM',
        priority: body.urgent ? 'high' : 'normal',
      },
    });
  }

  async requestService(guestLink: string, body: any) {
    const booking = await this.prisma.booking.findUnique({
      where: { guestLink },
    });

    if (!booking) throw new NotFoundException('Guest link not found');

    return this.prisma.task.create({
      data: {
        propertyId: booking.propertyId,
        bookingId: booking.id,
        type: 'SERVICE_REQUEST',
        title: body.title || 'Guest service request',
        description: body.description || '',
        priority: 'normal',
      },
    });
  }
}
