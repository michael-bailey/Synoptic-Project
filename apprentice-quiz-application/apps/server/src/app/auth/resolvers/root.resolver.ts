import { NotFoundException } from '@nestjs/common';
import {
  Args,
  CONTEXT,
  Context,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { threadId } from 'worker_threads';
import { Admin } from '../entities/Admin.entity';
import { Root } from '../entities/Root.entity';
import { Session } from '../entities/Session.entity';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';
import { RootService } from '../services/root.service';

@Resolver(() => Root)
export class RootResolver {
  constructor(
    private rootService: RootService,
    private authService: AuthService,
    private adminService: AdminService
  ) {}

  @ResolveField(() => [Admin])
  async admins(@Parent() parent: Root): Promise<Array<Admin>> {
    return await parent.admins;
  }

  @ResolveField(() => Session)
  async sessions(@Parent() parent: Root): Promise<Array<Session>> {
    return await parent.sessions;
  }

  @Mutation(() => Root)
  async createAdmin(
    @Context() ctx,
    @Args('username') username: string,
    @Args('password') password: string
  ): Promise<Root> {
    const root = await (await this.authService.getSession(ctx)).root;
    if (root == null) throw new NotFoundException('root user not found');
    return await this.rootService.addAdmin(root, {
      username,
      password,
    });
  }
}
