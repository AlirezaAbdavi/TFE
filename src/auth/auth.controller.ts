import {
  Post,
  Patch,
  Body,
  Controller,
  NotFoundException,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { logInDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserPasswordDto } from 'src/modules/users/dto/update-user.dto';
import { CurrentUser } from 'src/common/decorators';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async logIn(@Body() loginInfo: logInDto) {
    const user = await this.authService.validateUser(
      loginInfo.email,
      loginInfo.password,
    );
    if (!user) throw new NotFoundException('کاربر یافت نشد');

    return this.authService.login(user);
  }

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  async register(@Body() registerInfo: RegisterDto) {
    return this.authService.register(registerInfo);
  }

  @Patch('updata-password')
  async updatePassword(
    @CurrentUser('email') email: string,
    @Body() updateUserPasswordDto: UpdateUserPasswordDto,
  ) {
    return this.authService.updatePassword(
      email,
      updateUserPasswordDto.currentPassword,
      updateUserPasswordDto.newPassword,
    );
  }
}
