import { Mutation, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Session } from '../entities/Session.entity';

import { User } from '../entities/User.entity';

@Resolver(() => User)
export class UserResolver {
  @ResolveField(() => Session)
  async sessions(@Parent() parent: User): Promise<Array<Session>> {
    return await parent.sessions;
  }
}
