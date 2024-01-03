import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ex_attributes } from 'src/_global/constants';
import { ApplicationError } from 'src/_global/errors';
import { TEmployee, TDepartment } from 'src/models';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(TEmployee)
    private readonly tEmployee: typeof TEmployee,
    @InjectModel(TDepartment)
    private readonly tDepartment: typeof TDepartment,
  ) {}

  async findEmployByCardNo(reqBody) {
    const { card_no } = reqBody;
    const employee = await this.tEmployee.findOne({
      where: { card_no },
      attributes: ex_attributes,
      include: [
        {
          attributes: ex_attributes,
          model: this.tDepartment,
          as: 'department',
        },
      ],
      nest: true,
    });

    if (!employee) {
      throw new Error('员工不存在');
    }

    return employee;
  }

  async bindOpenid(reqBody) {
    const { openid, employee_id } = reqBody;
    const employee = await this.tEmployee.findOne({
      where: { id: employee_id },
      attributes: ['id', 'openid'],
    });

    if (!employee) {
      throw new ApplicationError({ msg: '员工不存在' });
    }
    if (employee.openid) {
      throw new ApplicationError({ msg: '不能再次绑定，请联系管理员' });
    }

    await this.tEmployee.update({ openid }, { where: { id: employee_id } });
  }
}
