import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
import { Role } from '@prisma/client';

type UserWithoutPass = Omit<User, 'password'>;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserWithoutPass[]> {
    return await this.prisma.user.findMany({
      where: { deletedAt: null },
      omit: { password: true },
    });
  }

  async create(
    email: string,
    password: string,
    name?: string,
    role?: Role,
  ): Promise<UserWithoutPass> {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    return this.prisma.user.create({
      data: { email, password: hashPassword, name, role },
      omit: { password: true },
    });
  }

  async findById(id: string): Promise<UserWithoutPass> {
    const user = await this.prisma.user.findFirst({
      where: { id, deletedAt: null },
      omit: { password: true },
    });

    if (!user) throw new NotFoundException('کاربر یافت نشد');
    return user;
  }

  async deleteById(id: string) {
    const user = await this.prisma.user.findFirst({
      where: { id, deletedAt: null },
    });

    if (!user) throw new NotFoundException('کاربر یافت نشد');

    const deletedUser = await this.prisma.user.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
    if (!deletedUser)
      throw new NotFoundException('کاربر حذف نشد مجدد تلاش کنید');

    return { message: 'حساب کاربری شما با موفقیت حذف شد' };
  }

  async updateById(id: string, data: object): Promise<UserWithoutPass | null> {
    const user = await this.prisma.user.update({
      where: { id, deletedAt: null },
      data,
      omit: { password: true },
    });

    if (!user) throw new NotFoundException('کاربر یافت نشد');

    return user;
  }

  async findOneByEmail(email: string): Promise<UserWithoutPass | null> {
    return await this.prisma.user.findFirst({
      where: { email, deletedAt: null },
      omit: { password: true },
    });
  }
  async findOneByEmailWithPass(email: string): Promise<User | null> {
    return await this.prisma.user.findFirst({
      where: { email, deletedAt: null },
    });
  }
}
