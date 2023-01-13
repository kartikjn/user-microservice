/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

//a) Connect with DB. (Mongodb use mongoose OR Postgres use Typeorm)
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: 'Nikhil123@',
  host: 'localhost',
  port: 5432,
  database: 'userManagement',
  entities: [ __dirname + '/../**/*.entity{.ts,.js}',],
  synchronize: true,
};