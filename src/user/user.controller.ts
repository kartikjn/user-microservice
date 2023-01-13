/* eslint-disable prettier/prettier */
import { Controller, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod } from '@nestjs/microservices';

interface  ICreateUserDto {
  userID: string
  password: string
}

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly userservice: UserService) {}

  @GrpcMethod('UserService', 'CreateUser')
  async createUser(ICreateUserDto): Promise<ICreateUserDto> {
     return await this.userservice.signup(ICreateUserDto);
  }
 
  @GrpcMethod('UserService', 'GetProfile')
  async getProfile(userID: string): Promise<ICreateUserDto> {
    return await this.userservice.find(userID);
  }
}
