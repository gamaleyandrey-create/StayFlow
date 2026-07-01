import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.task.findMany({
      include: { property: true, booking: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: { property: true, booking: true },
    });

    if (!task) throw new NotFoundException('Task not found');

    return task;
  }

  create(dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        propertyId: dto.propertyId,
        bookingId: dto.bookingId,
        assignedWorkerId: dto.assignedWorkerId,
        type: dto.type,
        title: dto.title,
        description: dto.description,
        date: dto.date ? new Date(dto.date) : undefined,
        price: dto.price,
        priority: dto.priority || 'normal',
      },
    });
  }

  updateStatus(id: string, status: any) {
    return this.prisma.task.update({
      where: { id },
      data: { status },
    });
  }

  assign(id: string, workerId: string) {
    return this.prisma.task.update({
      where: { id },
      data: {
        assignedWorkerId: workerId,
        status: 'ASSIGNED',
      },
    });
  }

  async complete(id: string, photos: string[]) {
    const task = await this.prisma.task.update({
      where: { id },
      data: {
        status: 'COMPLETED',
        photos,
      },
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
