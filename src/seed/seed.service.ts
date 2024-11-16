import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';

/**
 * El derorador de injectable nos dice que este servicio es un provider
 */
@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {}

  populateDB() {

    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    return `SEED EXECUTE`;
  }

}
