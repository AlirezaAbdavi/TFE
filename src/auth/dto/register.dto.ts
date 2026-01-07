import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'ali@example.com',
    description: 'ایمیل منحصر به فرد کاربر',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'mohamad',
  })
  @IsString()
  name?: string;

  @ApiProperty({ example: 'pas123' })
  @IsString()
  @MinLength(6)
  password: string;
}
