import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizResolver } from './quiz.resolver';
import { QuestionModule } from '../question/question.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/Quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz]), QuestionModule],
  providers: [QuizResolver, QuizService],
  exports: [QuizService],
})
export class QuizModule {}
