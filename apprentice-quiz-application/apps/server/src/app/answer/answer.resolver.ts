import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
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

  @Mutation(() => Answer)
  async updateQuestion(
    @Args('id') id: string,
    @Args('text', { nullable: true }) text: string | null,
    @Args('isCorrect', { nullable: true }) isCorrect: boolean | null
  ) {
    const quiz = await this.answerService.findById(id);
    if (quiz == null) throw new NotFoundException('quiz not found');
    return await this.answerService.update(id, { text, isCorrect });
  }
}
