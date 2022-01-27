import { ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';
import { Account } from './Account.entity';
import { Admin } from './Admin.entity';
import { Session } from './Session.entity';

@Entity()
@ObjectType()
export class Root extends Account {
  @OneToMany(() => Session, (s) => s.root)
  sessions: Promise<Array<Session>>;

  @OneToMany(() => Admin, (a) => a.root)
  admins: Promise<Array<Admin>>;
}
