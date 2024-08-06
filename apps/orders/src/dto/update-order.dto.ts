import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsString } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsString()
    @Type(() => String)
    @ApiProperty({ example: 'Example' })
    userID: String;

    @IsString()
    @Type(() => String)
    @ApiProperty({ example: 'Example' })
    projectID: String;
}
