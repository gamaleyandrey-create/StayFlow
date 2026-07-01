import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.property.findMany({ orderBy: { createdAt: 'desc' } });
  }

  findOne(id: string) {
    return this.prisma.property.findUnique({
      where: { id },
      include: { bookings: true, tasks: true },
    });
  }

  create(data: any) {
    return this.prisma.property.create({ data });
  }
}
