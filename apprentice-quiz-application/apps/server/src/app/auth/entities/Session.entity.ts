import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from './Account.entity';

@Entity()
@ObjectType()
export class Session {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Account, (a) => a.sessions)
  account: Promise<Account>;
}
