import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get('/search')
  search(@Query('user_id') searchingData: string) {
    return `We are searching for a data: ${searchingData}`;
  }

  @Get('/:id')
  getOne(@Param('id') userID: number) {
    return this.userService.getOne(userID);
  }

  @Post()
  create(@Body() createUserData: CreateUserDTO) {
    return this.userService.create(createUserData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.userService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') ID: string, @Body() updateData: UpdateUserDTO) {
    return {
      updateTarget: ID,
      ...updateData,
    };
  }
}
