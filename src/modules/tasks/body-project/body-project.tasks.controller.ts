import { Controller, Post, Session, UseGuards } from '@nestjs/common';
import { BodyProjectTasksService } from './body-project.tasks.service';
import { ApiOperation } from '@nestjs/swagger';
import { NeedOpenidGuard } from 'src/guards/need-openid.guard';

@Controller('tasks/body-project')
export class BodyProjectTasksController {
  constructor(
    private readonly bodyProjectTasksService: BodyProjectTasksService,
  ) {}

  @ApiOperation({ summary: '获取BodyProject员工卡片' })
  @Post('get-employee-card-list')
  @UseGuards(NeedOpenidGuard)
  async getEmployeeCardList(@Session() session) {
    const { user_id } = session;
    return await this.bodyProjectTasksService.getEmployeeCardList();
  }
}
