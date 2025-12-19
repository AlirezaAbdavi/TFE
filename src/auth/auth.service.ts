import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    throw new UnauthorizedException('اطلاعات ورود اشتباه است');
  }

  // ۲. تولید توکن برای کاربر لاگین شده
  login(user: any) {
    const payload = { email: user.email, sub: user._id }; // اطلاعات داخل توکن
    return {
      access_token: this.jwtService.sign(payload), // تولید امضا
    };
  }
}
