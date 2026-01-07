import { Module } from '@nestjs/common';
import { UsersModule } from '../modules/users/users.module';
import { TasksModule } from '../modules/tasks/tasks.module';
import { AdminUsersController } from './controllers/admin-users.controller';
import { AdminTasksController } from './controllers/admin-tasks.controller';

@Module({
  imports: [UsersModule, TasksModule],
  controllers: [AdminUsersController, AdminTasksController],
})
export class AdminModule {}
