import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Answer } from '../answer/entities/Answer.entity';
import { Quiz } from '../quiz/entities/Quiz.entity';
import { Question } from './entities/Question.entity';
import { QuestionService } from './question.service';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @ResolveField(() => Quiz)
  async quiz(@Parent() parent: Question) {
    return await parent.quiz;
  }

  @ResolveField(() => [Answer])
  async answers(@Parent() parent: Question) {
    return await parent.answers;
  }

  @Mutation(() => Question)
  async updateQuestion(
    @Args('id') id: string,
    @Args('text', { nullable: true }) text: string | null,
    @Args('extra', { nullable: true }) extra: string | null
  ) {
    const quiz = await this.questionService.findById(id);
    if (quiz == null) throw new NotFoundException('quiz not found');
    return await this.questionService.update(id, { text, extra });
  }

  @Mutation(() => Question)
  async addQuestion(
    @Args('id') id: string,
    @Args('text') text: string,
    @Args('isCorrect') isCorrect: boolean
  ) {
    const question = await this.questionService.findById(id);
    if (question == null) throw new NotFoundException('question not found');
    return await this.questionService.addAnswer(question, {
      text,
      isCorrect,
    });
  }
}
