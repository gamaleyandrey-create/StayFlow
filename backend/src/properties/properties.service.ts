import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.property.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
      include: { bookings: true, tasks: true },
    });

    if (!property) throw new NotFoundException('Property not found');

    return property;
  }

  create(dto: CreatePropertyDto) {
    return this.prisma.property.create({
      data: {
        title: dto.title,
        address: dto.address,
        city: dto.city,
        country: dto.country || 'Spain',
        bedrooms: dto.bedrooms,
        bathrooms: dto.bathrooms,
        maxGuests: dto.maxGuests,
        wifiName: dto.wifiName,
        wifiPassword: dto.wifiPassword,
        doorCode: dto.doorCode,
        instructions: dto.instructions,
      },
    });
  }

  update(id: string, dto: Partial<CreatePropertyDto>) {
    return this.prisma.property.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: string) {
    return this.prisma.property.delete({
      where: { id },
    });
  }
}
