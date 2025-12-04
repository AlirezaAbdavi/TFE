import { Post, Body, Controller, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { logInDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async logIn(@Body() loginInfo: logInDto) {
    const { email, password } = loginInfo;
    const user = await this.authService.signIn(email, password);

    if (!user) throw new NotFoundException('کاربر یافت نشد');

    return this.authService.login(user);
  }
}
