import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Question } from './entities/Question.entity';
import { QuestionService } from './question.service';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

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
