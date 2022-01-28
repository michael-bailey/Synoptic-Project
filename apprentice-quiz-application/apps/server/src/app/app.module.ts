import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { QuizModule } from './quiz/quiz.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './answer/answer.module';

const DB_HOST = process.env['DB_HOST'] ?? 'localhost';
const DB_PORT = process.env['DB_PORT'] ?? '';

@Module({
  imports: [
    // setting up database
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      port: parseInt(DB_PORT),

      username: 'main',
      password: 'synoptic',

      database: 'main',

      autoLoadEntities: true,
      synchronize: true,
    }),
    // setting up graphql
    GraphQLModule.forRoot({
      debug: false,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.graphql'),
      context: ({ req, res }) => ({ req, res }),
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
    }),
    AuthModule,
    QuizModule,
    QuestionModule,
    AnswerModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
