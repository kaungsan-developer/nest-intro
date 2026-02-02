import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsIn(['male', 'female'])
  gender: string;

  @IsBoolean()
  @IsNotEmpty()
  isMarried: boolean;
}
