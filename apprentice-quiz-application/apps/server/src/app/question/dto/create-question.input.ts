import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateQuestionInput {
  @Field()
  text: string;

  @Field({ nullable: true })
  extra: string | null;
}
