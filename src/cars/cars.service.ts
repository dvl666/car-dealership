import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
/**
 * Para instalar uuid -> npm install uuid y npm install @types/uuid
 */
import { v4 as uuid} from 'uuid'
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
import { get } from 'http';

@Injectable()
export class CarsService {

    private cars: Car[] = [
        {
            id: "f97c5b8b-7e76-45ed-ba11-355ac8272f5d",
            brand: 'Toyota',
            model: 'Corolla',
            year: 2019
        },
        {
            id: "25623e6d-7ba5-45bf-9029-7c91ddfd07ae",
            brand: 'Toyota',
            model: 'Yaris',
            year: 2019
        },
        {
            id: "91430bd7-3946-4936-bd38-94333ba4c6c3",
            brand: 'Toyota',
            model: 'Hilux',
            year: 2019
        },
        {
            id: "1a6a871d-1593-4240-9642-ae7f8ec021cd",
            brand: 'Toyota',
            model: 'Rav4',
            year: 2019
        }
    ];

    findAll() {
        return this.cars;
    }
    
    getCarById( carId: string ): Car {
        const car = this.cars.find(car => car.id === carId);
        /**
         * Es una buena practica manejar las excepciones en el servicio
         */
        if (!car) throw new NotFoundException(`Car with id '${carId}' not found`);
        return car
    }

    createCar( createCarDto: CreateCarDto ): Car {
        /**
         * Aca se usa el operador spread para copiar las propiedades del objeto y luego agregarle el id (algo muy elegante)
         */
        const newCar: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(newCar);
        return newCar;
    }

    updateCar( carId: string, updateCarDto: UpdateCarDto ): Car {
        const car = this.getCarById(carId);
        /**
         * Aca se usa el operador spread para copiar las propiedades del objeto y luego agregarle las propiedades que se quieren actualizar
         */
        const updatedCar = {
            ...car,
            ...updateCarDto,
        }
        /**
         * .map() es un metodo que recorre el array en el cual busca un carro con el id que se quiere actualizar, si lo encuentra lo actualiza y si no lo encuentra lo deja igual
         */
        this.cars = this.cars.map(car => car.id === carId ? updatedCar : car);
        return updatedCar;
    }

    deleteCar( carId: string ): string {
        this.getCarById(carId);
        /**
         * .filter() es un metodo que recorre el array en el cual busca un carro con el id que se quiere eliminar, si lo encuentra lo elimina y si no lo encuentra lo deja igual
         */
        this.cars = this.cars.filter(car => car.id !== carId);
        return `Car with id '${carId}', was deleted`;
    }

}
