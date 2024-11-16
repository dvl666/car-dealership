import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

/**
 * Los modulos agrupan y desacoplan un conjunto de funcionalidad especíca por dominio.
 * Ejemplo: modulo de usuarios, modulo de productos, modulo de ventas, etc.
 */

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
