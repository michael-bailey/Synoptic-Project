import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAdminInput {
  @Field()
  text: string;

  @Field({ nullable: true })
  extra: string | null;
}
