import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CompanyScopeService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserCompanyId(userId: string): Promise<string> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new NotFoundException('User not found');

    if (!user.companyId && user.role !== 'ADMIN') {
      throw new ForbiddenException('User has no company');
    }

    return user.companyId || '';
  }

  canAccessCompany(user: any, companyId: string): boolean {
    if (user.role === 'ADMIN') return true;
    return user.companyId === companyId;
  }
}
