import { Module } from '@nestjs/common';
import { IdealTypeWorldCupService } from './ideal-type-world-cup.service';
import { IdealTypeWorldCupController } from './ideal-type-world-cup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdealTypeWorldCup } from './entities/ideal-type-world-cup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IdealTypeWorldCup])],
  controllers: [IdealTypeWorldCupController],
  providers: [IdealTypeWorldCupService],
})
export class IdealTypeWorldCupModule {}
