import { IsString } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";
export class CreateProjectDto {
    @IsString()
    @Type(() => String)
    @ApiProperty({ example: 'Example' })
    name: String;

    @IsString()
    @Type(() => Number)
    @ApiProperty({ example: '1' })
    resourceNumber: Number;
}
