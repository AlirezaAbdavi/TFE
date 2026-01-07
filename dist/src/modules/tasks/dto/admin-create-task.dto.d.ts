import { TaskStatus } from '@prisma/client';
export declare class AdminCreateTaskDto {
    description: string;
    status?: TaskStatus;
    userId: string;
}
