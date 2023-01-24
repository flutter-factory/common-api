import { PartialType } from '@nestjs/mapped-types';
import { CreateIdealTypeWorldCupDto } from './create-ideal-type-world-cup.dto';

export class UpdateIdealTypeWorldCupDto extends PartialType(
  CreateIdealTypeWorldCupDto,
) {}
