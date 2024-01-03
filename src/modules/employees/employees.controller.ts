import { Body, Controller, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { BindOpenidDto, FindByCardNoDto } from './employees.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @ApiOperation({ summary: '工号查询员工' })
  @ApiBody({ type: FindByCardNoDto })
  @Post('find-by-cardno')
  async findEmployByCardNo(@Body() reqBody: FindByCardNoDto) {
    return await this.employeesService.findEmployByCardNo(reqBody);
  }

  @ApiOperation({ summary: '绑定openid到员工' })
  @ApiBody({ type: BindOpenidDto })
  @Post('bind-openid')
  async bindOpenid(@Body() reqBody: BindOpenidDto) {
    return await this.employeesService.bindOpenid(reqBody);
  }
}
