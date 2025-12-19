import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [ClientController],
  providers: [],
  exports: [],
})
export class ClientModule {}
