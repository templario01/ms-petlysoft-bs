import { Module } from '@nestjs/common';
import { PrismaModule } from '../common/intrastructure/database/prisma.module';
import { VeterinaryCenterRepository } from './veterinary-center.repository';

@Module({
  imports: [PrismaModule],
  providers: [VeterinaryCenterRepository],
  exports: [VeterinaryCenterRepository],
})
export class PersistenceModule {}
