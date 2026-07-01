import { Module } from '@nestjs/common';
import { CompanyScopeService } from './company-scope.service';

@Module({
  providers: [CompanyScopeService],
  exports: [CompanyScopeService],
})
export class CompanyScopeModule {}
