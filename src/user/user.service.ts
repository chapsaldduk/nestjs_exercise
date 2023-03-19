import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

//entity
import { User } from './entities/user.entity';

//dto
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }

  async create(userData: CreateUserDTO): Promise<User> {
    // 중복제거 필요
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  // update 만들어야됨
  // 중복 제거 포함
}
