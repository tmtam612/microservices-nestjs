import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Logger } from 'nestjs-pino';
import { UsersModule } from './users.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigSwagger } from '@app/common/swagger/swagger.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: configService.get('TCP_PORT'),
    },
  });
  //   app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const config = ConfigSwagger('Users Example', 'Users', 'v1.0');
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.startAllMicroservices();
  await app.listen(configService.get('HTTP_PORT'));
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
