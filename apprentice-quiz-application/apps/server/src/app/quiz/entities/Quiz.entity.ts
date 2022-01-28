import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Admin } from '../../auth/entities/Admin.entity';
import { Question } from '../../question/entities/Question.entity';

@Entity()
@ObjectType()
export class Quiz {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string | null;

  @OneToMany(() => Question, (q) => q.quiz)
  questions: Promise<Array<Question>>;

  @ManyToOne(() => Admin, (a) => a.quizzes)
  admin: Promise<Admin>;
}
