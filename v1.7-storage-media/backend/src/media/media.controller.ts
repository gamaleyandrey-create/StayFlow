import { Controller, Get, Param, Delete } from '@nestjs/common';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly service: MediaService) {}

  @Get(':id')
  getFile(@Param('id') id: string) {
    return this.service.getFile(id);
  }

  @Delete(':id')
  deleteFile(@Param('id') id: string) {
    return this.service.deleteFile(id);
  }
}
