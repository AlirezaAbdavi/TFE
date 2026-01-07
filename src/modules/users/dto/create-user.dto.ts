import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty({
    example: 'ali@example.com',
    description: 'ایمیل منحصر به فرد کاربر',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'Mohamad Abdavi',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    example: 'pas123',
    description: 'حداقل ۶ کاراکتر',
    minLength: 6,
  })
  @IsString()
  @MinLength(6, { message: 'رمز عبور باید حداقل ۶ کاراکتر باشد' })
  password: string;

  @ApiPropertyOptional({
    example: 'USER',
    enum: Role,
    description: 'نقش کاربر',
  })
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
