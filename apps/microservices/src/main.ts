import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // app.useLogger(app.get(Logger));
  app.use(cookieParser());
  const configService = app.get(ConfigService);
  console.log(configService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
