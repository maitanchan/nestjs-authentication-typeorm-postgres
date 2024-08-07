import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from '../auth/guard/jwt.guard';


@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Get()
  getAllUsers() {

    return this.usersService.getAllUser()

  }

  @UseGuards(JwtGuard)
  @Get(':id')
  getUserById(@Param('id') userId: string) {

    return this.usersService.getUserById(userId)

  }

}
