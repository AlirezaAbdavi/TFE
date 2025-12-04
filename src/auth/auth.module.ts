import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'; // ایمپورت
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module'; // مسیر را چک کنید
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
// ... بقیه ایمپورت‌ها

@Module({
  imports: [
    UsersModule,
    PassportModule,
    // تغییر به روش Async برای خواندن کلید از کانفیگ
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get<string>('JWT_SECRET'), // کلید مخفی
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
