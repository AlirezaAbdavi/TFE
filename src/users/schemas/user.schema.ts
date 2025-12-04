import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// این خط برای تایپ‌اسکریپت است تا بداند داکیومنت کاربر چه شکلی است
export type UserDocument = HydratedDocument<User>;

@Schema() // معادل new Schema()
export class User {
  @Prop({ required: true }) // معادل { type: String, required: true }
  name: string;

  @Prop({ required: true, unique: [true, 'ایمیل تکراری است'] }) // ایمیل باید یکتا باشد
  email: string;

  @Prop({ required: true })
  password: string;
  // فیلد id_ به صورت خودکار توسط مونگو ساخته می‌شود، نیازی به تعریف نیست
}

// تبدیل کلاس بالا به اسکیمای استاندارد Mongoose
export const UserSchema = SchemaFactory.createForClass(User);
