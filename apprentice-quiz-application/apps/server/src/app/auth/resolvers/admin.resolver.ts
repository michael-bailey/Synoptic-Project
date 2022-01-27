import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Admin } from '../entities/Admin.entity';
import { Session } from '../entities/Session.entity';
import { User } from '../entities/User.entity';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private userService: UserService
  ) {}

  @ResolveField(() => [User])
  async users(@Parent() parent: Admin): Promise<Array<User>> {
    return await parent.users;
  }

  @ResolveField(() => Session)
  async sessions(@Parent() parent: Admin): Promise<Array<Session>> {
    return await parent.sessions;
  }

  @Mutation(() => Admin)
  async createUser(
    @Context() ctx,
    @Args('username') username: string,
    @Args('password') password: string
  ): Promise<Admin> {
    const admin = await (await this.authService.getSession(ctx)).admin;
    console.table(admin);
    if (admin == null) throw new NotFoundException('root user not found');
    return await this.adminService.addUser(admin, {
      username,
      password,
    });
  }
}
