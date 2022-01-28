import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Admin } from '../auth/entities/Admin.entity';
import { Question } from '../question/entities/Question.entity';
import { Quiz } from './entities/Quiz.entity';
import { QuizService } from './quiz.service';

@Resolver(() => Quiz)
export class QuizResolver {
  constructor(private readonly quizService: QuizService) {}

  @ResolveField(() => Admin)
  async admin(@Parent() parent: Quiz) {
    return await parent.admin;
  }

  @ResolveField(() => [Question])
  async questions(@Parent() parent: Quiz) {
    return await parent.questions;
  }

  @Mutation(() => Quiz)
  async addQuestion(
    @Args('id') id: string,
    @Args('title') text: string,
    @Args('extra', { nullable: true }) extra: string
  ) {
    const quiz = await this.quizService.findById(id);
    if (quiz == null) throw new NotFoundException('quiz not found');
    return await this.quizService.addQuestion(quiz, {
      text,
      extra,
    });
  }

  @Mutation(() => Quiz)
  async removeQuestion(
    @Args('id') id: string,
    @Args('questionId') questionId: string
  ) {
    const quiz = await this.quizService.findById(id);
    if (quiz == null) throw new NotFoundException('quiz not found');

    return await this.quizService.removeQuestion(quiz, questionId);
  }

  @Mutation(() => Quiz)
  async updateQuiz(
    @Args('id') id: string,
    @Args('title', { nullable: true }) title: string | null,
    @Args('description', { nullable: true }) description: string | null
  ) {
    const quiz = await this.quizService.findById(id);
    if (quiz == null) throw new NotFoundException('quiz not found');
    return await this.quizService.update(id, { title, description });
  }
}
