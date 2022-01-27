import {
  Args,
  Context,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Admin } from '../entities/Admin.entity';
import { Root } from '../entities/Root.entity';
import { Session } from '../entities/Session.entity';
import { AuthService } from '../services/auth.service';
import { RootService } from '../services/root.service';

@Resolver(() => Root)
export class RootResolver {
  constructor(
    private rootService: RootService,
    private authService: AuthService
  ) {}

  @ResolveField(() => Admin)
  async users(@Parent() parent: Root): Promise<Array<Admin>> {
    return await parent.admins;
  }

  @ResolveField(() => Session)
  async sessions(@Parent() parent: Root): Promise<Array<Session>> {
    return await parent.sessions;
  }
}
