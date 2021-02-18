import { Controller, Get } from '@nestjs/common';
import { Position } from './interfaces/position';
import { PositionsService } from './positions.service';

@Controller('positions')
export class PositionsController {
  constructor(private readonly positionsController: PositionsService) {
  }

  @Get()
  getPositions(): Position[] {
    return this.positionsController.getPositions();
  }

}
