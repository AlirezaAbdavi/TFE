import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../modules/users/users.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOneByEmailWithPass(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    throw new UnauthorizedException('اطلاعات ورود اشتباه است');
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findOneByEmailWithPass(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    throw new UnauthorizedException('کاربر نامجاز است');
  }

  login(user: Omit<User, 'password'>): object {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOneByEmail(registerDto.email);
    if (user) throw new BadRequestException('ایمیل تکراری است');

    return this.usersService.create(
      registerDto.email,
      registerDto.password,
      registerDto.name,
    );
  }

  async updatePassword(
    email: string,
    curPassword: string,
    newPassword: string,
  ): Promise<User | null> {
    const user = await this.validateUser(email, curPassword);
    if (!user) throw new NotFoundException('کاربر یافت نشد');
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    return user;
  }
}
