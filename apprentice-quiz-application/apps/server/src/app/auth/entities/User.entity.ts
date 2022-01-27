import { ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { Account } from './Account.entity';
import { Admin } from './Admin.entity';
import { Session } from './Session.entity';

@Entity()
@ObjectType()
export class User extends Account {
  @OneToMany(() => Session, (s) => s.user)
  sessions: Promise<Array<Session>>;

  @ManyToOne(() => Admin, (a) => a.users)
  admin: Promise<Admin>;
}
