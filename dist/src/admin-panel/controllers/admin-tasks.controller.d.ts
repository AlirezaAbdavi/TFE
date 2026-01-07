import { TasksService } from '../../modules/tasks/tasks.service';
import { AdminCreateTaskDto } from '../../modules/tasks/dto/admin-create-task.dto';
import { UpdateTaskDto } from '../../modules/tasks/dto/update-task.dto';
export declare class AdminTasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }[]>;
    createTask(createTaskDto: AdminCreateTaskDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }>;
    getTask(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }>;
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }>;
    deleteTask(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        status: import("@prisma/client").$Enums.TaskStatus;
        userId: string;
    }>;
}
