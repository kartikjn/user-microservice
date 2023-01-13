import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_Username,
  password: process.env.DB_Password,
  database: 'user-management',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
