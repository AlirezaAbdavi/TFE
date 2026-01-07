import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '@prisma/client';

export class AdminCreateTaskDto {
  @ApiProperty({
    example: 'Complete the project documentation',
    description: 'توضیحات تسک',
  })
  @IsString()
  description: string;

  @ApiPropertyOptional({
    example: 'PENDING',
    enum: TaskStatus,
    description: 'وضعیت تسک',
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({
    example: 'user-uuid-here',
    description: 'شناسه کاربر',
  })
  @IsString()
  userId: string;
}
