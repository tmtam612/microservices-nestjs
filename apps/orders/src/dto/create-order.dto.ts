import { IsString } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";
export class CreateOrderDto {
    @IsString()
    @Type(() => String)
    @ApiProperty({ example: 'Example' })
    userID: String;

    @IsString()
    @Type(() => String)
    @ApiProperty({ example: 'Example' })
    projectID: String;
}