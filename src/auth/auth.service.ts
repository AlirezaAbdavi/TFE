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

  // ۱. بررسی صحت نام کاربری و رمز عبور
  async signIn(email: string, pass: string): Promise<any> {
    // پیدا کردن کاربر از طریق سرویس کاربران
    const user = await this.usersService.findOneByEmail(email);

    // نکته: ما هنوز findOneByEmail را در UsersService نساختیم! (بعدا می‌سازیم)

    // مقایسه پسورد خام (pass) با پسورد هش شده در دیتابیس (user.password)
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }

    throw new UnauthorizedException('اطلاعات ورود اشتباه است');
  }

  // ۲. تولید توکن برای کاربر لاگین شده
  async login(user: any) {
    const payload = { email: user.email, sub: user._id }; // اطلاعات داخل توکن
    return {
      access_token: this.jwtService.sign(payload), // تولید امضا
    };
  }
}
