import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(user: any) {
    if (user.role === 'ADMIN') {
      return this.prisma.property.findMany({ orderBy: { createdAt: 'desc' } });
    }

    return this.prisma.property.findMany({
      where: { companyId: user.companyId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(user: any, id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
      include: { bookings: true, tasks: true },
    });

    if (!property) throw new NotFoundException('Property not found');

    if (user.role !== 'ADMIN' && property.companyId !== user.companyId) {
      throw new ForbiddenException('No access to this property');
    }

    return property;
  }

  async create(user: any, dto: any) {
    if (!user.companyId && user.role !== 'ADMIN') {
      throw new ForbiddenException('User has no company');
    }

    return this.prisma.property.create({
      data: {
        ...dto,
        companyId: user.companyId,
      },
    });
  }

  async update(user: any, id: string, dto: any) {
    await this.findOne(user, id);

    return this.prisma.property.update({
      where: { id },
      data: dto,
    });
  }

  async remove(user: any, id: string) {
    await this.findOne(user, id);

    return this.prisma.property.delete({ where: { id } });
  }
}
