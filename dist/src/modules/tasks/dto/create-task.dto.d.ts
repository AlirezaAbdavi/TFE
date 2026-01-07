import { TaskStatus } from '@prisma/client';
export declare class CreateTaskDto {
    description: string;
    status?: TaskStatus;
}
