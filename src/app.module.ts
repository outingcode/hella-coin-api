import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { resolve } from 'path';
import { EmployeesModule } from './modules/employees/employees.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';
import { RedisModule, RedisModuleOptions } from '@liaoliaots/nestjs-redis';
import { DatabaseModule } from './modules/_global/database.module';
import { CacheService } from '@services/cache.service';

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
    RedisModule.forRootAsync({
      useFactory: async (): Promise<RedisModuleOptions> => {
        return {
          closeClient: true,
          config: {
            host: 'localhost',
            port: 6379,
            // password: '123456',
            db: 0,
          },
        };
      },
    }),
    DatabaseModule,
    EmployeesModule,
    TasksModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, CacheService],
})
export class AppModule implements NestModule {
  configure() {}
}
