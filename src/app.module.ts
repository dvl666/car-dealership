import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';

/**
 * Agrupan y desacoplan un conjunto de funcionalidad especíca por dominio.
 * Ejemplo: modulo de usuarios, modulo de productos, modulo de ventas, etc.
 */

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
