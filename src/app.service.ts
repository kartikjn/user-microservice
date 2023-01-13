/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
   constructor(
    @InjectRepository(User) 
    private repository: Repository<User> 
   ) {}

  async signup(createUserDto: CreateUserDto): Promise<User> {
    const { userID, password } = createUserDto;
    const user = new User();

    user.userID = userID;
    user.password = password
    // await user.save();
    
    return user;
  }

  async find(userID: any): Promise<User> {
    const user = await this.repository.findOne(userID);
    if(user){
       return user;
    }
  }
}


