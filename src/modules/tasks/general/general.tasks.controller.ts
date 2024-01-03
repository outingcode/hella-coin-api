import { Controller } from '@nestjs/common';
import { GeneralTasksService } from './general.tasks.service';

@Controller('tasks/general')
export class GeneralTasksController {
  constructor(private readonly generalTasksService: GeneralTasksService) {}
}
