import { AbstractRepository } from "@app/common/database/abstract.repository";
import { Injectable, Logger } from "@nestjs/common";
import { ProjectDocument } from "./models/project.schema";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

Injectable()
export class ProjectsRepository extends AbstractRepository<ProjectDocument> {
    protected readonly logger = new Logger(ProjectsRepository.name);
  
    constructor(
      @InjectModel(ProjectDocument.name)
      projectModel: Model<ProjectDocument>,
    ) {
      super(projectModel);
    }
  }