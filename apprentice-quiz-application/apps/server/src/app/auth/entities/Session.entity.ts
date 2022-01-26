import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Admin } from './Admin.entity';
import { Root } from './Root.entity';
import { User } from './User.entity';

@Entity()
@ObjectType()
export class Session {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (u) => u.sessions)
  user: Promise<User | null>;

  @ManyToOne(() => Admin, (a) => a.sessions)
  admin: Promise<Admin | null>;

  @ManyToOne(() => Root, (r) => r.sessions)
  root: Promise<Root | null>;
}
