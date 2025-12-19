import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppServices } from './app.services';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin-panel/admin.module';
import { ClientModule } from './client-panel/client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // خواندن از .env
      }),
      inject: [ConfigService],
    }),
    ClientModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppServices],
})
export class AppModule {}
