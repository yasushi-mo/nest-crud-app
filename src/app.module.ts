import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'blog_app',
      entities: [],
      synchronize: true,
      retryAttempts: 3,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {}
