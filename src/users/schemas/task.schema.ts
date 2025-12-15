import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { TaskStatus } from 'src/common/constants';
import { User } from './user.schema';

export type TaskDocument = HydratedDocument<Task>;

@Schema({ timestamps: true }) // برای اضافه کردن فیلدهای createdAt و updatedAt
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: TaskStatus, default: TaskStatus.PENDING })
  status: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop()
  deletedAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
