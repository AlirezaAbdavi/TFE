import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll() {
    return this.userModel.find().exec();
  }

  async create(createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(createUserDto.password, salt);
    const userWhitHash = { ...createUserDto, password: hashPassword };

    const createdUser = new this.userModel(userWhitHash);
    return createdUser.save();
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) throw new NotFoundException('کاربر یافت نشد');
    return user;
  }

  async deleteOne(id: string) {
    const user = await this.userModel
      .updateOne({ id, deletedAt: new Date() })
      .exec();
    if (!user) throw new NotFoundException('کاربر یافت نشد');
    return user;
  }

  async updateOne(updateUserDto: UpdateUserDto, id: string) {
    const updatedUser = await this.userModel
      .updateOne({ _id: id }, updateUserDto)
      .exec();
    return updatedUser;
  }

  async findOneByEmail(email: string): Promise<User | null> {
    const user = await this.userModel
      .findOne({ email })
      .select('+password')
      .exec();
    if (!user) throw new NotFoundException('کاربر یافت نشد');
    return user;
  }
}
