import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @ApiProperty({ example: 'Example' })
  @Type(() => String)
  name: string;

  @IsString()
  @ApiProperty({ example: 'Example' })
  @Type(() => String)
  ntid: string;
  @IsEmail()
  @Type(() => String)
  @ApiProperty({ example: 'Example' })
  email: string;

  @IsStrongPassword()
  @ApiProperty({ example: 'Example' })
  @Type(() => String)
  password: string;
}
