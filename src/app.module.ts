import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';

/**
 * Los modulos agrupan y desacoplan un conjunto de funcionalidad especíca por dominio.
 * Ejemplo: modulo de usuarios, modulo de productos, modulo de ventas, etc.
 */

@Module({
  imports: [CarsModule, BrandsModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
/**
 * Para pasar a produccion se ejecuta:
 *  npm build
 *  npm run start:prod
 */
