import { IsNumber, IsString } from "class-validator";

/**
 * Los dtos tienen que ser classes para poder aplicar la validación de los datos.
 */
export class CreateCarDto {

    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;

    @IsNumber()
    readonly year: number;
    
}