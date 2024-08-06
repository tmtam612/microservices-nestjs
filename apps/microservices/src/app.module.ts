import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from 'apps/projects/src/projects.module';
import { UsersModule } from 'apps/users/src/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/apps/microservices/.env`,
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
        USERS_HOST: Joi.string().required(),
        PROJECTS_HOST: Joi.string().required(),
        USERS_PORT: Joi.number().required(),
        PROJECTS_PORT: Joi.number().required(),
        ORDERS_HOST: Joi.number().required(),
        ORDERS_PORT: Joi.number().required(),
      }),
    }),
    ClientsModule.registerAsync([
      {
        name: "USERS_SERVICE",
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('USERS_HOST'),
            port: configService.get('USERS_PORT'),
          },
        }),
        inject: [ConfigService],
      },
      {
        name: "PROJECTS_SERVICE",
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('PROJECTS_HOST'),
            port: configService.get('PROJECTS_PORT'),
          },
        }),
        inject: [ConfigService],
      },
      {
        name: "ORDERS_SERVICE",
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('ORDERS_HOST'),
            port: configService.get('ORDERS_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
