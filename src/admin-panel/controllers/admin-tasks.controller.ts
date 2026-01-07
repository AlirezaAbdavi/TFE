import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { Role } from '@prisma/client';

import { TasksService } from '../../modules/tasks/tasks.service';
import { AdminCreateTaskDto } from '../../modules/tasks/dto/admin-create-task.dto';
import { UpdateTaskDto } from '../../modules/tasks/dto/update-task.dto';
import { JwtAuthGuard, RolesGuard } from '../../common/guards';
import { Roles } from '../../common/decorators';

@ApiTags('Admin - Tasks')
@ApiBearerAuth()
@Controller('admin/tasks')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN, Role.SUPER_ADMIN)
export class AdminTasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'دریافت لیست همه تسک‌ها' })
  getAllTasks() {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'ایجاد تسک برای یک کاربر' })
  createTask(@Body() createTaskDto: AdminCreateTaskDto) {
    return this.tasksService.create(createTaskDto.userId, createTaskDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'دریافت اطلاعات یک تسک' })
  getTask(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'بروزرسانی تسک' })
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'حذف تسک' })
  deleteTask(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
