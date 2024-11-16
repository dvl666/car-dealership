import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  exports: [BrandsService] //De esta manera conseguimos poder exportar el servicio para poder usarlo en otros módulos (ver seed.module.ts)
})
export class BrandsModule {}
