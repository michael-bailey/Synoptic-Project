import { ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { Account } from './Account.entity';
import { Root } from './Root.entity';
import { Session } from './Session.entity';
import { User } from './User.entity';

@Entity()
@ObjectType()
export class Admin extends Account {
  @OneToMany(() => Session, (s) => s.admin)
  sessions: Promise<Array<Session>>;

  @OneToMany(() => User, (u) => u.admin)
  users: Promise<Array<User>>;

  @ManyToOne(() => Root, (r) => r.admins)
  root: Promise<Root>;
}
