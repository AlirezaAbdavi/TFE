import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { Role } from '@prisma/client';

import { UsersService } from '../../modules/users/users.service';
import { CreateUserDto } from '../../modules/users/dto/create-user.dto';
import { UpdateUserDto } from '../../modules/users/dto/update-user.dto';

import { JwtAuthGuard, RolesGuard } from '../../common/guards';
import { Roles } from '../../common/decorators';

@ApiTags('Admin - Users')
@ApiBearerAuth()
@Controller('admin/users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.ADMIN, Role.SUPER_ADMIN)
export class AdminUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'دریافت لیست همه کاربران' })
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'ایجاد کاربر جدید' })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(
      createUserDto.email,
      createUserDto.password,
      createUserDto.name,
      createUserDto.role,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'دریافت اطلاعات یک کاربر' })
  getUser(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'بروزرسانی اطلاعات کاربر' })
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateById(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'حذف کاربر (soft delete)' })
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteById(id);
  }
}
