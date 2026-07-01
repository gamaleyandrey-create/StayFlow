import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GuestService {
  constructor(private prisma: PrismaService) {}

  openGuestLink(guestLink: string) {
    return this.prisma.booking.findUnique({
      where: { guestLink },
      include: { property: true },
    });
  }

  async reportProblem(guestLink: string, body: any) {
    const booking = await this.prisma.booking.findUnique({
      where: { guestLink },
    });

    if (!booking) return { error: 'Guest link not found' };

    return this.prisma.task.create({
      data: {
        propertyId: booking.propertyId,
        bookingId: booking.id,
        type: 'PROBLEM',
        title: body.title || 'Guest reported problem',
        description: body.description,
        status: 'PROBLEM',
      },
    });
  }
}
