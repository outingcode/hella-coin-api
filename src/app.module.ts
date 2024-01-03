import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { resolve } from 'path';
import { EmployeesModule } from './modules/employees/employees.module';
import { DatabaseModule } from './modules/_global/database.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => {
        return {
          dialect: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '123456',
          database: 'hella_coin_sys',
          modelPaths: [resolve(__dirname, './models', '**/!(index).{ts,js}')],
        };
      },
    }),
    DatabaseModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure() {}
}
