import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(user: any) {
    if (user.role === 'ADMIN') {
      return this.prisma.task.findMany({
        include: { property: true, booking: true },
        orderBy: { createdAt: 'desc' },
      });
    }

    return this.prisma.task.findMany({
      where: { property: { companyId: user.companyId } },
      include: { property: true, booking: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(user: any, id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: { property: true, booking: true },
    });

    if (!task) throw new NotFoundException('Task not found');

    if (user.role !== 'ADMIN' && task.property.companyId !== user.companyId) {
      throw new ForbiddenException('No access to this task');
    }

    return task;
  }

  async updateStatus(user: any, id: string, status: any) {
    await this.findOne(user, id);
    return this.prisma.task.update({ where: { id }, data: { status } });
  }

  async complete(user: any, id: string, photos: string[]) {
    const task = await this.findOne(user, id);

    const updated = await this.prisma.task.update({
      where: { id },
      data: { status: 'COMPLETED', photos },
    });

    if (task.type === 'CLEANING') {
      await this.prisma.property.update({
        where: { id: task.propertyId },
        data: { status: 'READY' },
      });
    }

    return updated;
  }
}
