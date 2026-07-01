import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.property.findMany({ orderBy: { createdAt: 'desc' } });
  }

  findOne(id: string) {
    return this.prisma.property.findUnique({ where: { id } });
  }

  create(dto: CreatePropertyDto) {
    return this.prisma.property.create({ data: dto });
  }

  update(id: string, dto: Partial<CreatePropertyDto>) {
    return this.prisma.property.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.property.delete({ where: { id } });
  }
}
