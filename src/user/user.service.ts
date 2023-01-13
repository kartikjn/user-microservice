import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(UserEntity) 
    private repository: Repository<UserEntity>
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { email, username, password } = createUserDto;
    const user = new UserEntity();

    user.email = email;
    user.username = username;
    user.password = password
    await this.repository.save(user);
    
    return user;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
