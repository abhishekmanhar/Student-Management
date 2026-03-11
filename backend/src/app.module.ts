import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [StudentsModule, PrismaModule],
  providers: [PrismaService],
})
export class AppModule {}
