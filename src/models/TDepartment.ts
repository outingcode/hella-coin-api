import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 't_department',
  timestamps: true,
  paranoid: true,
  deletedAt: 'deleted_at',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class TDepartment extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  company_id: number;

  @Column
  name: string;

  @Column({
    allowNull: true,
    type: DataType.DATE,
    comment: '删除时间 null-未删除',
  })
  deleted_at?: Date;

  @Column({ type: DataType.DATE, comment: '创建时间' })
  created_at!: Date;

  @Column({ type: DataType.DATE, comment: '更新时间' })
  updated_at!: Date;
}
