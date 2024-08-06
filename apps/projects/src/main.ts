import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Logger } from 'nestjs-pino';
import { ProjectsModule } from './projects.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigSwagger } from '@app/common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(ProjectsModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: configService.get('TCP_PORT'),
    },
  });
  //   app.useLogger(app.get(Logger));
  const config = ConfigSwagger('Projects Example', 'Projects', 'v1.0');
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.startAllMicroservices();
  await app.listen(configService.get('HTTP_PORT'));
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
