import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAdminInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description: string | null;
}
