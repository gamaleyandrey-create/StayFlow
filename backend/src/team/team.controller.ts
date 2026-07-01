import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { InviteTeamMemberDto } from './dto/invite-team-member.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('team')
@UseGuards(JwtAuthGuard)
export class TeamController {
  constructor(private readonly service: TeamService) {}

  @Get()
  list(@CurrentUser() user: any) {
    return this.service.list(user.sub);
  }

  @Post('invite')
  invite(@CurrentUser() user: any, @Body() dto: InviteTeamMemberDto) {
    return this.service.invite(user.sub, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
