import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { DatabaseModule } from '@app/common/database/database.module';
import { ProjectsRepository } from './projects.repository';
import { ProjectDocument, ProjectSchema } from './models/project.schema';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ProjectDocument.name, schema: ProjectSchema },
    ]),
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/apps/projects/.env`,
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
        TCP_PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsRepository],
})
export class ProjectsModule {}
