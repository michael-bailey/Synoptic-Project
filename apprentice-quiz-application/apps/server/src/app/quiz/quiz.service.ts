import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Service from '../../helpers/Service';
import { CreateQuestionInput } from '../question/dto/create-question.input';
import { QuestionService } from '../question/question.service';
import { CreateQuizInput } from './dto/create-quiz.input';
import { Quiz } from './entities/Quiz.entity';

@Injectable()
export class QuizService extends Service<Quiz, CreateQuizInput> {
  type = Quiz;

  constructor(
    @InjectRepository(Quiz) quizRepository: Repository<Quiz>,
    private questionService: QuestionService
  ) {
    super(quizRepository);
  }

  async addQuestion(quiz: Quiz, createDTO: CreateQuestionInput) {
    const question = await this.questionService.create(createDTO);

    const questions = await quiz.questions;

    quiz.questions = Promise.resolve([...questions, question]);
    return await this.save(quiz);
  }
}
