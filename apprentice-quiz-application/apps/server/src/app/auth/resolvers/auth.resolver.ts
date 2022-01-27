import {
  Resolver,
  Query,
  Context,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';

import { AuthService } from '../services/auth.service';
import { Admin } from '../entities/Admin.entity';
import { Root } from '../entities/Root.entity';
import { Session } from '../entities/Session.entity';
import { User } from '../entities/User.entity';
import { RootService } from '../services/root.service';
import { AdminService } from '../services/admin.service';
import { UserService } from '../services/user.service';

@Resolver(() => Session)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly rootService: RootService,
    private readonly adminService: AdminService,
    private readonly userService: UserService
  ) {}

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

  /**
   * gets the Current login session
   *
   * @param ctx the req and res object used to get cookies
   * @returns {Session}
   */
  @Query(() => Session)
  async session(@Context() ctx): Promise<Session> {
    return this.authService.getSession(ctx);
  }

  @Mutation(() => Session)
  async loginRoot(
    @Args('password') password: string,
    @Context() ctx
  ): Promise<Session> {
    let session = await this.authService.getSession(ctx);
    session = await this.rootService.login(session, password);
    this.authService.save(session);
    return session;
  }

  @Mutation(() => Session)
  async loginAdmin(
    @Args('username') username: string,
    @Args('password') password: string,
    @Context() ctx
  ) {
    let session = await this.authService.getSession(ctx);
    session = await this.adminService.login(ctx, username, password);
    return await this.authService.save(session);
  }

  @Mutation(() => Session)
  async loginUser(
    @Args('username') username: string,
    @Args('password') password: string,
    @Context() ctx
  ) {
    let session = await this.authService.getSession(ctx);
    session = await this.userService.login(ctx, username, password);
    return await this.authService.save(session);
  }

  /**
   * removes any account from the current session
   * @param ctx the req and res object used to get cookies
   * @returns
   */
  @Mutation(() => Session)
  async logout(@Context() ctx): Promise<Session> {
    return await this.authService.logout(ctx);
  }
}
