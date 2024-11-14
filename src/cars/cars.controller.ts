import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private carsService: CarsService
    ) {}

    @Get()
    getAllCars(): {id, brand, model, year}[] {
        return this.carsService.findAll();
    }

    //ParseIntPipe convierte el string a number, si se ingresa una mezcla mandara un error 400.
    @Get(':carId')
    getCarById( @Param('carId', ParseIntPipe ) carId: number) {
        /**
         * El signo + convierte el string a number (ejemplo abajo)
         */
        const car = this.carsService.getCarById( carId );
        return car;
    }

    @Post()
    async createCar( @Body() body: any ) {
        console.log(body);
        return body;
    }

    @Patch(':carId')
    async updateCar( 
        @Param('carId', ParseIntPipe) carId: number, 
        @Body() body: any ) 
    {
        console.log(carId);
        console.log(body);
        return body;
    }

    @Delete(':carId')
    async deleteCar( @Param('carId', ParseIntPipe) carId: number ) {
        console.log(carId);
        return 'Car deleted';
    }

}
