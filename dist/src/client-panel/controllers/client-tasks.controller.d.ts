import { TasksService } from '../../modules/tasks/tasks.service';
import { CreateTaskDto } from '../../modules/tasks/dto/create-task.dto';
import { UpdateTaskDto } from '../../modules/tasks/dto/update-task.dto';
export declare class ClientTasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getMyTasks(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }[]>;
    createTask(userId: string, createTaskDto: CreateTaskDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }>;
    getTask(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }>;
    updateTask(userId: string, id: string, updateTaskDto: UpdateTaskDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }>;
    deleteTask(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }>;
}
