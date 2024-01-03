import { Controller } from '@nestjs/common';
import { BodyProjectTasksService } from './body-project.tasks.service';

@Controller('tasks/body-project')
export class BodyProjectTasksController {
  constructor(
    private readonly bodyProjectTasksService: BodyProjectTasksService,
  ) {}
}
