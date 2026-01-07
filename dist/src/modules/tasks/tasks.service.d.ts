import { PrismaService } from '../../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<Task[]>;
    findAllByUser(userId: string): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    findOneByUser(id: string, userId: string): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    updateByUser(id: string, userId: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(id: string): Promise<Task>;
    removeByUser(id: string, userId: string): Promise<Task>;
}
