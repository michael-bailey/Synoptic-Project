import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAnswerInput {
  @Field()
  text: string;

  @Field()
  isCorrect: boolean;
}
