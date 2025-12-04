import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
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
  name: string;

  @ApiProperty({
    example: 'password123',
    description: 'حداقل ۶ کاراکتر',
    minLength: 6,
  })
  @IsString()
  @MinLength(6, { message: 'رمز عبور باید حداقل ۶ کاراکتر باشد' })
  password: string;
}
