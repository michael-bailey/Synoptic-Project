import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Service from '../../helpers/Service';
import { CreateAnswerInput } from './dto/create-answer.input';
import { Answer } from './entities/Answer.entity';

@Injectable()
export class AnswerService extends Service<Answer, CreateAnswerInput> {
  type = Answer;

  constructor(@InjectRepository(Answer) answerRepository: Repository<Answer>) {
    super(answerRepository);
  }
}
