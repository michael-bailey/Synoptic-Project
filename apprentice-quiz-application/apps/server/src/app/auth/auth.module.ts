import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Session } from './entities/Session.entity';
import { Admin } from './entities/Admin.entity';
import { AuthResolver } from './resolvers/auth.resolver';
import { User } from './entities/User.entity';
import { AuthService } from './services/auth.service';
import { Root } from './entities/Root.entity';
import { AdminResolver } from './resolvers/admin.resolver';
import { RootResolver } from './resolvers/root.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { RootService } from './services/root.service';
import { AdminService } from './services/admin.service';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Admin, Root, Session])],
  providers: [
    AdminResolver,
    RootResolver,
    AuthResolver,
    UserResolver,
    AuthService,
    RootService,
    AdminService,
    UserService,
  ],
})
export class AuthModule {}
