import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
    @IsString()
    @Type(() => String)
    @ApiProperty({ example: 'Example' })
    name: String;

    @IsString()
    @Type(() => Number)
    @ApiProperty({ example: '1' })
    resourceNumber: Number;
}
