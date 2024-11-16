import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

/**
 * Todos los servicios son providers, no todos los providers son servicios
 */

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService] //De esta manera conseguimos poder exportar el servicio para poder usarlo en otros módulos (ver seed.module.ts)
})
export class CarsModule {}
