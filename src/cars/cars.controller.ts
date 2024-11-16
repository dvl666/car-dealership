import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
import { Car } from './interfaces/car.interface';

/**
 * Vamos a usar el decorador @UsePipes para aplicar la validación de los datos en el controlador, tambien se podria poner arriba de la peticion que se quiere validar o en el main.ts
 */
// @UsePipes(ValidationPipe) ------> paso a estar en el main.ts
@Controller('cars')
export class CarsController {

    constructor(
        private carsService: CarsService
    ) {}

    @Get()
    getAllCars(): Car[] {
        return this.carsService.findAll();
    }

    //ParseIntPipe convierte el string a number, si se ingresa una mezcla mandara un error 400.
    //ParseUUIDPipe convierte el string a uuid, si se ingresa una mezcla mandara un error 400.
    @Get(':carId')
    getCarById( @Param( 'carId', new ParseUUIDPipe({version: '4'}) ) carId: string) {
        /**
         * El signo + convierte el string a number (ejemplo abajo)
         */
        const car = this.carsService.getCarById( carId );
        return car;
    }

    @Post()
    async createCar( @Body() createCarDto: CreateCarDto ) {
        return createCarDto;
    }

    @Patch(':carId')
    async updateCar( 
        @Param( 'carId', ParseUUIDPipe ) carId: string, 
        @Body() updateCarDto: UpdateCarDto ) 
    {
        const car = this.carsService.updateCar(carId, updateCarDto);
        return car;
    }

    @Delete(':carId')
    async deleteCar( @Param('carId', ParseUUIDPipe) carId: string ) {
        console.log(carId);
        return this.carsService.deleteCar(carId);;
    }

}
