import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

    @IsUUID('4')
    @IsOptional()
    readonly id: string;

    @IsOptional()
    @IsString()
    readonly brand?: string;

    @IsOptional()
    @IsString()
    readonly model?: string;

    @IsOptional()
    @IsNumber()
    readonly year?: number;
    
}