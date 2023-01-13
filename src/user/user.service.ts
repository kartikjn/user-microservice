/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
   constructor(
    @InjectRepository(User) 
    private readonly userRepository: Repository<User> 
   ) {}

  async signup(createUserDto: CreateUserDto): Promise<any> {
     return this.userRepository.save(createUserDto);
  }

  async find(userID: any): Promise<User> {
    const user = await this.userRepository.findOne(userID);
    if(user){
       return user;
    }
    return null;
  }
}


