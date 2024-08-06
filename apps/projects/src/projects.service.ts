import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsRepository } from './projects.repository';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectsRepository.create({
      ...createProjectDto,
    });
  }

  findAll() {
    return this.projectsRepository.find({});
  }

  findOne(_id: string) {
    return this.projectsRepository.find({ _id });
  }

  update(_id: string, updateProjectDto: UpdateProjectDto) {
    return this.projectsRepository.findOneAndUpdate(
      { _id },
      { $set: updateProjectDto },
    );
  }

  remove(_id: string) {
    return this.projectsRepository.findOneAndDelete({ _id });
  }
}
