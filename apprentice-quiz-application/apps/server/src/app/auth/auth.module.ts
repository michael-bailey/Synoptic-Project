import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './entities/Session.entity';
import { Account } from './entities/Account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Session, Account])],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
