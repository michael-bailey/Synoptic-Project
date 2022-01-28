import { Injectable } from '@nestjs/common';
import Service from '../../helpers/Service';
import { CreateAnswerInput } from './dto/create-answer.input';
import { Answer } from './entities/Answer.entity';

@Injectable()
export class AnswerService extends Service<Answer, CreateAnswerInput> {
  type = Answer;
}
