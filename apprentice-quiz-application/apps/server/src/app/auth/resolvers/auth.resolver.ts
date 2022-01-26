import {
  Resolver,
  Query,
  Context,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';

import { AuthService } from '../auth.service';
import { Admin } from '../entities/Admin.entity';
import { Root } from '../entities/Root.entity';
import { Session } from '../entities/Session.entity';
import { User } from '../entities/User.entity';

@Resolver(() => Session)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @ResolveField(() => Root, { nullable: true })
  async root(@Parent() parent: Session): Promise<Root> {
    return parent.root;
  }

  @ResolveField(() => Admin, { nullable: true })
  async admin(@Parent() parent: Session): Promise<Admin> {
    return parent.admin;
  }

  @ResolveField(() => User, { nullable: true })
  async user(@Parent() parent: Session): Promise<User> {
    return parent.user;
  }

  @Query(() => Session)
  async session(@Context() ctx): Promise<Session> {
    return this.authService.getSession(ctx);
  }

  @Mutation(() => Session)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
    @Context() ctx
  ): Promise<Session> {
    const session = await this.authService.getSession(ctx);

    return session;
  }
}
