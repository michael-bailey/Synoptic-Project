import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as crypto from 'crypto';

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

  @Column({ default: '0' })
  _salt: string;

  public set password(v: string) {
    if (this._password == v) return;

    console.log('[User] set password:', v);
    this._salt = generateString(10);
    this._password = crypto
      .createHash('sha256')
      .update(v + this._salt)
      .digest('hex');
    console.log('[User] set _password:', this._password);
  }

  public get password(): string {
    return this._password;
  }

  // todo: replace this with implementation
  checkPassword(password: string) {
    const testPassword = crypto
      .createHash('sha256')
      .update(password + this._salt)
      .digest('hex');
    return this._password === testPassword;
  }
}

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
