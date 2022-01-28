import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Question } from '../question/entities/Question.entity';
import { AnswerService } from './answer.service';
import { Answer } from './entities/Answer.entity';

@Resolver(() => Answer)
export class AnswerResolver {
  constructor(private readonly answerService: AnswerService) {}

  @ResolveField(() => Question)
  async question(@Parent() parent: Answer) {
    return await parent.question;
  }
}
