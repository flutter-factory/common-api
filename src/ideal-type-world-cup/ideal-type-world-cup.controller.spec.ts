import { Test, TestingModule } from '@nestjs/testing';
import { IdealTypeWorldCupController } from './ideal-type-world-cup.controller';
import { IdealTypeWorldCupService } from './ideal-type-world-cup.service';

describe('IdealTypeWorldCupController', () => {
  let controller: IdealTypeWorldCupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdealTypeWorldCupController],
      providers: [IdealTypeWorldCupService],
    }).compile();

    controller = module.get<IdealTypeWorldCupController>(
      IdealTypeWorldCupController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
