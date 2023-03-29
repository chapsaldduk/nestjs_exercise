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

type funcs = {
  getAll: string;
  search: (searchingData: string) => string;
  getOne: (userID: number) => Promise<User | undefined>;
  create: (createUserData: CreateUserDTO) => Promise<User>;
  remove: (id: number) => Promise<void>;
  patch: (ID: string, updateData: UpdateUserDTO) => any;
};

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  // !complete
  @Get('/search')
  search(@Query('user_id') searchingData: string): string {
    return `We are searching for a data: ${searchingData}`;
  }

  @Get('/:id')
  getOne(@Param('id') userID: number): Promise<User | undefined> {
    return this.userService.getOne(userID);
  }

  @Post()
  create(@Body() createUserData: CreateUserDTO): Promise<User> {
    return this.userService.create(createUserData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.deleteOne(id);
  }

  @Patch('/:id')
  patch(@Param('id') ID: string, @Body() updateData: UpdateUserDTO): any {
    return {
      updateTarget: ID,
      ...updateData,
    };
  }
}
