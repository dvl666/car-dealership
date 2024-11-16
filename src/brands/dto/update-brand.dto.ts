import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsNumber, IsOptional, IsUUID } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
    
    @IsOptional()
    @IsUUID('4')
    id: string

}
