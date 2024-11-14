import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

/**
 * Todos los servicios son providers, no todos los providers son servicios
 */

@Module({
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
