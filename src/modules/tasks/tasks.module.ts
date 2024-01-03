import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { BodyProjectTasksController } from './body-project/body-project.tasks.controller';
import { BodyProjectTasksService } from './body-project/body-project.tasks.service';
import { GeneralTasksController } from './general/general.tasks.controller';
import { GeneralTasksService } from './general/general.tasks.service';

@Module({
  controllers: [
    TasksController,
    BodyProjectTasksController,
    GeneralTasksController,
  ],
  providers: [TasksService, BodyProjectTasksService, GeneralTasksService],
})
export class TasksModule {}
