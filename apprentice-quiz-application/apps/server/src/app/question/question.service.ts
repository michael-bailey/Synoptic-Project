import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Service from '../../helpers/Service';
import { AnswerService } from '../answer/answer.service';
import { CreateAnswerInput } from '../answer/dto/create-answer.input';
import { Quiz } from '../quiz/entities/Quiz.entity';
import { CreateQuestionInput } from './dto/create-question.input';
import { Question } from './entities/Question.entity';

@Injectable()
export class QuestionService extends Service<Question, CreateQuestionInput> {
  type = Question;

  constructor(
    @InjectRepository(Question) questionRepository: Repository<Question>,
    private answerService: AnswerService
  ) {
    super(questionRepository);
  }

  async addAnswer(question: Question, createDTO: CreateAnswerInput) {
    const answer = await this.answerService.create(createDTO);

    const answers = await question.answers;

    question.answers = Promise.resolve([...answers, answer]);
    return await this.save(question);
  }
}
