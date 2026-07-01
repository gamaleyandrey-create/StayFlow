import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(ownerId: string, dto: CreateCompanyDto) {
    const company = await this.prisma.company.create({
      data: {
        name: dto.name,
        plan: dto.plan || 'FREE',
      },
    });

    await this.prisma.user.update({
      where: { id: ownerId },
      data: { companyId: company.id, role: 'OWNER' },
    });

    return company;
  }

  async getUserCompany(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { company: true },
    });

    if (!user?.company) {
      throw new NotFoundException('Company not found for user');
    }

    return user.company;
  }

  async findOne(id: string) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      include: { users: true, properties: true },
    });

    if (!company) throw new NotFoundException('Company not found');

    return company;
  }

  update(id: string, dto: Partial<CreateCompanyDto>) {
    return this.prisma.company.update({
      where: { id },
      data: dto,
    });
  }
}
