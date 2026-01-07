import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';

import { UsersService } from '../../modules/users/users.service';
import { JwtAuthGuard } from '../../common/guards';
import { CurrentUser } from '../../common/decorators';
import {
  UpdateUserDto,
  UpdateUserPasswordDto,
} from 'src/modules/users/dto/update-user.dto';

@ApiTags('Client - Users')
@ApiBearerAuth()
@Controller('client/users')
@UseGuards(JwtAuthGuard)
export class ClientUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  @ApiOperation({ summary: 'دریافت پروفایل کاربر' })
  getProfile(@CurrentUser('userId') userId: string) {
    return this.usersService.findById(userId);
  }

  @Patch('profile')
  @ApiOperation({ summary: 'بروزرسانی پروفایل کاربر' })
  updateProfile(
    @CurrentUser('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateById(userId, updateUserDto);
  }
}
