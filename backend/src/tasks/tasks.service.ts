import { Injectable } from '@nestjs/common';
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
        priority: dto.priority,
      },
    });
  }

  updateStatus(id: string, status: any) {
    return this.prisma.task.update({
      where: { id },
      data: { status },
    });
  }
}
