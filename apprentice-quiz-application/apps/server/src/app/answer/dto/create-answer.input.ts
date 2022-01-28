import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAdminInput {
  @Field()
  text: string;

  @Field()
  isCorrect: boolean;
}
