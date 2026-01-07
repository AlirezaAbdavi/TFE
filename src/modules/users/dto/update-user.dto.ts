import { PartialType, OmitType, PickType, ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, MinLength } from 'class-validator';

export class UpdateUserDto extends OmitType(PartialType(CreateUserDto), [
  'role',
  'password',
]) {}

export class UpdateUserRoleDto extends PickType(CreateUserDto, ['role']) {}

export class UpdateUserPasswordDto {
  currentPassword: string;

  @ApiProperty({
    example: 'pas123',
    description: 'حداقل 6 کاراکتر باشد',
  })
  @IsEmail()
  @MinLength(6)
  newPassword: string;
}
