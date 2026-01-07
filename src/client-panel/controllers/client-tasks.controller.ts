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

import { TasksService } from '../../modules/tasks/tasks.service';
import { CreateTaskDto } from '../../modules/tasks/dto/create-task.dto';
import { UpdateTaskDto } from '../../modules/tasks/dto/update-task.dto';
import { JwtAuthGuard } from '../../common/guards';
import { CurrentUser } from '../../common/decorators';

@ApiTags('Client - Tasks')
@ApiBearerAuth()
@Controller('client/tasks')
@UseGuards(JwtAuthGuard)
export class ClientTasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'دریافت تسک‌های کاربر' })
  getMyTasks(@CurrentUser('userId') userId: string) {
    return this.tasksService.findAllByUser(userId);
  }

  @Post()
  @ApiOperation({ summary: 'ایجاد تسک جدید' })
  createTask(
    @CurrentUser('userId') userId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.tasksService.create(userId, createTaskDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'دریافت اطلاعات یک تسک' })
  getTask(
    @CurrentUser('userId') userId: string,
    @Param('id') id: string,
  ) {
    return this.tasksService.findOneByUser(id, userId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'بروزرسانی تسک' })
  updateTask(
    @CurrentUser('userId') userId: string,
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    return this.tasksService.updateByUser(id, userId, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'حذف تسک' })
  deleteTask(
    @CurrentUser('userId') userId: string,
    @Param('id') id: string,
  ) {
    return this.tasksService.removeByUser(id, userId);
  }
}
