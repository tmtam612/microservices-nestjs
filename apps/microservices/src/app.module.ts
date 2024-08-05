import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from 'apps/projects/src/projects.module';
import { UsersModule } from 'apps/users/src/users.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ProjectsModule,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/apps/microservices/.env`,
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
