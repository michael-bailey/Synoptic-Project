import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@ObjectType()
class Test {
  @Field()
  id: string;
}

@Resolver(() => Test)
export class AppResolver {
  @Query(() => Test)
  async AppTest(): Promise<Test> {
    return { id: 'DO NOT USE' };
  }
}
