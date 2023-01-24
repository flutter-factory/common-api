import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIdealTypeWorldCupDto } from './dto/create-ideal-type-world-cup.dto';
import { UpdateIdealTypeWorldCupDto } from './dto/update-ideal-type-world-cup.dto';
import { IdealTypeWorldCup } from './entities/ideal-type-world-cup.entity';

@Injectable()
export class IdealTypeWorldCupService {
  constructor(
    @InjectRepository(IdealTypeWorldCup)
    private idealTypeWorldCupRepository: Repository<IdealTypeWorldCup>
  ) {}

  create(createIdealTypeWorldCupDto: CreateIdealTypeWorldCupDto) {
    return 'This action adds a new idealTypeWorldCup';
  }

  findAll() {
    return this.idealTypeWorldCupRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} idealTypeWorldCup`;
  }

  update(id: number, updateIdealTypeWorldCupDto: UpdateIdealTypeWorldCupDto) {
    return `This action updates a #${id} idealTypeWorldCup`;
  }

  remove(id: number) {
    return `This action removes a #${id} idealTypeWorldCup`;
  }
}
