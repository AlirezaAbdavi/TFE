import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';
import { randomUUID } from 'crypto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createTaskDto: CreateTaskDto): Promise<Task> {
    return this.prisma.task.create({
      data: {
        id: randomUUID(),
        description: createTaskDto.description,
        status: createTaskDto.status,
        userId,
      },
    });
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findAllByUser(userId: string): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: { userId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!task) throw new NotFoundException('تسک یافت نشد');
    return task;
  }

  async findOneByUser(id: string, userId: string): Promise<Task> {
    const task = await this.prisma.task.findFirst({
      where: { id, userId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!task) throw new NotFoundException('تسک یافت نشد');
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('تسک یافت نشد');

    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async updateByUser(id: string, userId: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.prisma.task.findFirst({ where: { id, userId } });
    if (!task) throw new NotFoundException('تسک یافت نشد');

    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: string): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('تسک یافت نشد');

    return this.prisma.task.delete({ where: { id } });
  }

  async removeByUser(id: string, userId: string): Promise<Task> {
    const task = await this.prisma.task.findFirst({ where: { id, userId } });
    if (!task) throw new NotFoundException('تسک یافت نشد');

    return this.prisma.task.delete({ where: { id } });
  }
}
