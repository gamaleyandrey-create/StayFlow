import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Controller('companies')
@UseGuards(JwtAuthGuard)
export class CompaniesController {
  constructor(private readonly service: CompaniesService) {}

  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateCompanyDto) {
    return this.service.create(user.sub, dto);
  }

  @Get('me')
  getMyCompany(@CurrentUser() user: any) {
    return this.service.getUserCompany(user.sub);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: Partial<CreateCompanyDto>) {
    return this.service.update(id, dto);
  }
}
