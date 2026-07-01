import { Injectable } from '@nestjs/common';

@Injectable()
export class MediaService {
  getFile(id: string) {
    return {
      id,
      url: `/uploads/${id}`,
      message: 'MVP placeholder. Use Multer in implementation.',
    };
  }

  deleteFile(id: string) {
    return {
      id,
      deleted: true,
    };
  }
}
