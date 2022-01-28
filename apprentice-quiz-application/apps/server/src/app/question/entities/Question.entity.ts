import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Answer } from '../../answer/entities/Answer.entity';
import { Quiz } from '../../quiz/entities/Quiz.entity';

@Entity()
@ObjectType()
export class Question {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  text: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  extra: string | null;

  @ManyToOne(() => Quiz, (q) => q.questions)
  quiz: Promise<Quiz>;

  @OneToMany(() => Answer, (a) => a.question)
  answers: Promise<Array<Answer>>;
}
