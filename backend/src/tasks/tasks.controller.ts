import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TasksService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.service.create(dto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: { status: any }) {
    return this.service.updateStatus(id, body.status);
  }

  @Patch(':id/assign')
  assign(@Param('id') id: string, @Body() body: { workerId: string }) {
    return this.service.assign(id, body.workerId);
  }

  @Post(':id/complete')
  complete(@Param('id') id: string, @Body() body: { photos?: string[] }) {
    return this.service.complete(id, body.photos || []);
  }
}
