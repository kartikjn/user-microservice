import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { AppController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AppController],
  providers: [UserService]
})
export class UserModule {}
