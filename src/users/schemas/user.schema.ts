import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Query } from 'mongoose';
import { NotFoundException } from '@nestjs/common';
import { Role } from 'src/common/constants';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true, select: false, minlength: 6 })
  password: string;

  @Prop({
    required: true,
    enum: Role,
    default: Role.USER,
  })
  role: Role;

  @Prop({ default: 'default-avatar.png' })
  avatar: string;

  @Prop({ index: true })
  deletedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

// در فایل schema (مثلا user.schema.ts) قبل از ساختن مدل

UserSchema.pre(/^find/, function (this: Query<any, any>, next) {
  this.where({ deletedAt: null });
  next();
});
