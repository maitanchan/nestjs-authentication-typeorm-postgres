import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TopicModule } from './topic/topic.module';

@Module({

  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: '123',
      database: 'nestjs-authentication-typeorm',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true
    }),

    UsersModule,

    CommentsModule,

    AuthModule,

    TopicModule

  ],

})
export class AppModule { }
