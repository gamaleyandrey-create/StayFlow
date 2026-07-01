import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { InviteTeamMemberDto } from './dto/invite-team-member.dto';

@Injectable()
export class TeamService {
  constructor(private readonly prisma: PrismaService) {}

  async list(userId: string) {
    const currentUser = await this.prisma.user.findUnique({ where: { id: userId } });

    if (!currentUser?.companyId) {
      return [];
    }

    return this.prisma.user.findMany({
      where: { companyId: currentUser.companyId },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async invite(ownerId: string, dto: InviteTeamMemberDto) {
    const owner = await this.prisma.user.findUnique({ where: { id: ownerId } });

    if (!owner?.companyId) {
      throw new BadRequestException('Owner has no company');
    }

    const passwordHash = await bcrypt.hash(dto.temporaryPassword || '123456', 10);

    return this.prisma.user.create({
      data: {
        companyId: owner.companyId,
        name: dto.name,
        email: dto.email,
        phone: dto.phone,
        role: dto.role,
        passwordHash,
      },
      select: {
        id: true,
        companyId: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
