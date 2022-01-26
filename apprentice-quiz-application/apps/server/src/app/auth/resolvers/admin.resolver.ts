import { Context, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Admin } from '../entities/Admin.entity';
import { Session } from '../entities/Session.entity';
import { User } from '../entities/User.entity';

@Resolver(() => Admin)
export class AdminResolver {
  @ResolveField(() => User)
  async users(@Parent() parent: Admin): Promise<Array<User>> {
    return await parent.users;
  }

  @ResolveField(() => Session)
  async sessions(@Parent() parent: Admin): Promise<Array<Session>> {
    return await parent.sessions;
  }
}
