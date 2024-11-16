import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Brand 1',
      createdAt: new Date().getTime(),
    },
    {
      id: uuid(),
      name: 'Brand 2',
      createdAt: new Date().getTime(),
    },
    {
      id: uuid(),
      name: 'Brand 3',
      createdAt: new Date().getTime(),
    }
  ]

  create(createBrandDto: CreateBrandDto): Brand {
    const newBrand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime()
    }
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(brandId: string): Brand {
    const brand = this.brands.find(brand => brand.id === brandId);
    return brand; 
  }

  update(brandId: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(brandId);
    const updatedBrand = {
      ...brand, // Mantiene las propiedades originales de la marca
      ...updateBrandDto, // Sobrescribe las propiedades con los valores del DTO
      updatedAt: new Date().getTime(), // Actualiza la fecha de actualización
    }
    /**
     * Usa una función anónima (arrow function) para iterar sobre cada elemento del array.
     */
    this.brands = this.brands.map((brand) => 
      brand.id === brandId ? updatedBrand : brand 
    );
    return updatedBrand;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter(( brand ) => 
      brand.id !== id
    );
    return `Brand with id '${id}' has been deleted`;
  }
}
