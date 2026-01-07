import { Module } from '@nestjs/common';
import { UsersModule } from '../modules/users/users.module';
import { TasksModule } from '../modules/tasks/tasks.module';
import { ClientUsersController } from './controllers/client-users.controller';
import { ClientTasksController } from './controllers/client-tasks.controller';

@Module({
  imports: [UsersModule, TasksModule],
  controllers: [ClientUsersController, ClientTasksController],
})
export class ClientModule {}
