import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
            year: 2019
        },
        {
            id: 2,
            brand: 'Toyota',
            model: 'Yaris',
            year: 2019
        },
        {
            id: 3,
            brand: 'Toyota',
            model: 'Hilux',
            year: 2019
        },
        {
            id: 4,
            brand: 'Toyota',
            model: 'Rav4',
            year: 2019
        }
    ];

    findAll() {
        return this.cars;
    }
    
    getCarById(carId: number): {id, brand, model, year} {
        const car = this.cars.find(car => car.id === carId);
        /**
         * Es una buena practica manejar las excepciones en el servicio
         */
        if (!car) throw new NotFoundException(`Car with id '${carId}' not found`);
        return car
    }

}
