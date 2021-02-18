import { Injectable } from '@nestjs/common';
import { Position } from './interfaces/position';
import { positions } from './mock-data/positions';

@Injectable()
export class PositionsService {
  getPositions(): Position[] {
    return positions;
  }
}
