import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { config } from 'dotenv';

config({ path: join(__dirname, '../.env') });

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
      transport: Transport.GRPC,
      options: {
          url: `localhost:${process.env.GRPC_PORT}`,
          package: 'users',
          protoPath: join(__dirname, '../src/_proto/user.proto'),
          maxReceiveMessageLength:
              Number(process.env.GRPC_MAX_MESSAGE_SIZE_BYTES) || 21000000,
          maxSendMessageLength:
              Number(process.env.GRPC_MAX_MESSAGE_SIZE_BYTES) || 21000000
      }
  });

  await app.listen();
}

bootstrap();
