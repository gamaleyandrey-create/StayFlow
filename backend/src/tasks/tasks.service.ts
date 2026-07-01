import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.task.findMany({
      include: { property: true, booking: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  updateStatus(id: string, status: any) {
    return this.prisma.task.update({
      where: { id },
      data: { status },
    });
  }

  async complete(id: string, photos: string[]) {
    const task = await this.prisma.task.update({
      where: { id },
      data: { status: 'COMPLETED', photos },
    });

    if (task.type === 'CLEANING') {
      await this.prisma.property.update({
        where: { id: task.propertyId },
        data: { status: 'READY' },
      });
    }

    return task;
  }
}
