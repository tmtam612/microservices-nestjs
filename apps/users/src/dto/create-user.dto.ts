import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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
