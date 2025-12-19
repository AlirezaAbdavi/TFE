import { HydratedDocument, Types } from 'mongoose';
import { User } from './user.schema';
export type TaskDocument = HydratedDocument<Task>;
export declare class Task {
    title: string;
    description: string;
    status: string;
    owner: User;
    deletedAt: Date;
}
export declare const TaskSchema: import("mongoose").Schema<Task, import("mongoose").Model<Task, any, any, any, import("mongoose").Document<unknown, any, Task, any, {}> & Task & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Task, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Task>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Task> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
