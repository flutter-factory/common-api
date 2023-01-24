import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IdealTypeWorldCupService } from './ideal-type-world-cup.service';
import { CreateIdealTypeWorldCupDto } from './dto/create-ideal-type-world-cup.dto';
import { UpdateIdealTypeWorldCupDto } from './dto/update-ideal-type-world-cup.dto';

@Controller('ideal-type-world-cup')
export class IdealTypeWorldCupController {
  constructor(
    private readonly idealTypeWorldCupService: IdealTypeWorldCupService,
  ) {}

  @Post()
  create(@Body() createIdealTypeWorldCupDto: CreateIdealTypeWorldCupDto) {
    return this.idealTypeWorldCupService.create(createIdealTypeWorldCupDto);
  }

  @Get()
  findAll() {
    return this.idealTypeWorldCupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.idealTypeWorldCupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIdealTypeWorldCupDto: UpdateIdealTypeWorldCupDto,
  ) {
    return this.idealTypeWorldCupService.update(
      +id,
      updateIdealTypeWorldCupDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.idealTypeWorldCupService.remove(+id);
  }
}