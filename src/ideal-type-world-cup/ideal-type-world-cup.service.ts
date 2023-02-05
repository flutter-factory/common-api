import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FilterOperator,
  paginate,
  Paginated,
  PaginateQuery,
} from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateIdealTypeWorldCupDto } from './dto/create-ideal-type-world-cup.dto';
import { UpdateIdealTypeWorldCupDto } from './dto/update-ideal-type-world-cup.dto';
import { IdealTypeWorldCup } from './entities/ideal-type-world-cup.entity';
import { WORLD_CUP_STATUS } from './ideal-type-world-cup.type';

@Injectable()
export class IdealTypeWorldCupService {
  constructor(
    @InjectRepository(IdealTypeWorldCup)
    private idealTypeWorldCupRepository: Repository<IdealTypeWorldCup>,
  ) {}

  create(createIdealTypeWorldCupDto: CreateIdealTypeWorldCupDto) {
    return 'This action adds a new idealTypeWorldCup';
  }

  findAll(query: PaginateQuery): Promise<Paginated<IdealTypeWorldCup>> {
    return paginate(query, this.idealTypeWorldCupRepository, {
      sortableColumns: ['createdAt'],
      searchableColumns: ['title', 'worldCupStatus'],
      defaultSortBy: [['idealTypeWorldCupId', 'ASC']],
      filterableColumns: {
        mediaType: [FilterOperator.EQ],
      },
      where: {
        worldCupStatus: WORLD_CUP_STATUS.ACTIVE,
      },
    });
  }

  findOne(id: number) {
    return this.idealTypeWorldCupRepository.findOneBy({
      idealTypeWorldCupId: id,
    });
  }

  update(id: number, updateIdealTypeWorldCupDto: UpdateIdealTypeWorldCupDto) {
    return `This action updates a #${id} idealTypeWorldCup`;
  }

  remove(id: number) {
    return `This action removes a #${id} idealTypeWorldCup`;
  }
}
