import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GuestService } from './guest.service';

@Controller('guest')
export class GuestController {
  constructor(private readonly service: GuestService) {}

  @Get(':guestLink')
  openGuestLink(@Param('guestLink') guestLink: string) {
    return this.service.openGuestLink(guestLink);
  }

  @Post(':guestLink/problem')
  reportProblem(@Param('guestLink') guestLink: string, @Body() body: any) {
    return this.service.reportProblem(guestLink, body);
  }

  @Post(':guestLink/service-request')
  requestService(@Param('guestLink') guestLink: string, @Body() body: any) {
    return this.service.requestService(guestLink, body);
  }
}
