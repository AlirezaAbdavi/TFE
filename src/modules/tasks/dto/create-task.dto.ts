import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '@prisma/client';

export class CreateTaskDto {
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
}
