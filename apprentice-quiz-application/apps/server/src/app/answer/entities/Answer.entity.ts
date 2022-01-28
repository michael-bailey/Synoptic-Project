import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from '../../question/entities/Question.entity';

@Entity()
@ObjectType()
export class Answer {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  text: string;

  @Field()
  @Column()
  isCorrect: boolean;

  @ManyToOne(() => Question, (q) => q.answers)
  question: Promise<Question>;
}
