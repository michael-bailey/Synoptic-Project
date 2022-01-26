import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Context,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Account } from './entities/Account.entity';
import { Session } from './entities/Session.entity';

@Resolver(() => Session)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @ResolveField(() => Account, { nullable: true })
  async account(@Parent() parent: Session): Promise<Account> {
    return parent.account;
  }

  @Query(() => Session)
  async session(@Context() ctx): Promise<Session> {
    return this.authService.getSession(ctx);
  }
}
