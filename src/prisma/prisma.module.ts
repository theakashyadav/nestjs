import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// * To make this module available globally
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
