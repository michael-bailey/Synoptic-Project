import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Session } from './Session.entity';

@Entity()
@ObjectType({ isAbstract: true })
export abstract class Account {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  username: string;

  @Column()
  _password: string;

  @Column()
  _salt: string;

  @OneToMany(() => Session, (s) => s.account)
  sessions: Promise<Array<Session>>;
}
