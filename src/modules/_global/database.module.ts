import { Global, Module } from '@nestjs/common';
import { InjectModel, SequelizeModule } from '@nestjs/sequelize';

import { TDepartment, TEmployee } from 'src/models';

@Global()
@Module({
  imports: [SequelizeModule.forFeature([TDepartment, TEmployee])],
  exports: [SequelizeModule],
  controllers: [],
  providers: [],
})
export class DatabaseModule {
  constructor(
    @InjectModel(TDepartment)
    private readonly tDepartment: typeof TDepartment,
    @InjectModel(TEmployee)
    private readonly tEmployee: typeof TEmployee,
  ) {
    this.tEmployee.hasOne(this.tDepartment, {
      foreignKey: 'id',
      sourceKey: 'department_id',
      as: 'department',
    });
  }
}
