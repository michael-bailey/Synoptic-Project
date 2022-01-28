import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Quiz } from '../../quiz/entities/Quiz.entity';

import { Admin } from '../entities/Admin.entity';
import { Session } from '../entities/Session.entity';
import { User } from '../entities/User.entity';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(
    private authService: AuthService,
    private adminService: AdminService
  ) {}

  @ResolveField(() => [User])
  async users(@Parent() parent: Admin): Promise<Array<User>> {
    return await parent.users;
  }

  @ResolveField(() => [Quiz])
  async quizzes(@Parent() parent: Admin): Promise<Array<Quiz>> {
    return await parent.quizzes;
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
    if (admin == null) throw new NotFoundException('admin user not found');
    return await this.adminService.addUser(admin, {
      username,
      password,
    });
  }

  @Mutation(() => Admin)
  async addQuiz(
    @Context() ctx,
    @Args('title') title: string,
    @Args('description', { nullable: true }) description: string
  ) {
    const admin = await (await this.authService.getSession(ctx)).admin;
    if (admin == null) throw new NotFoundException('admin not found logged in');
    return await this.adminService.addQuiz(admin, {
      title,
      description,
    });
  }

  @Mutation(() => Admin)
  async removeQuiz(@Context() ctx, @Args('id') id: string) {
    const admin = await (await this.authService.getSession(ctx)).admin;
    if (admin == null) throw new NotFoundException('admin not found logged in');

    return await this.adminService.removeQuiz(admin, id);
  }
}
