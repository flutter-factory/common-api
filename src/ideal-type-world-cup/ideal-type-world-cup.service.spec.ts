import { Test, TestingModule } from '@nestjs/testing';
import { IdealTypeWorldCupService } from './ideal-type-world-cup.service';

describe('IdealTypeWorldCupService', () => {
  let service: IdealTypeWorldCupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdealTypeWorldCupService],
    }).compile();

    service = module.get<IdealTypeWorldCupService>(IdealTypeWorldCupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
