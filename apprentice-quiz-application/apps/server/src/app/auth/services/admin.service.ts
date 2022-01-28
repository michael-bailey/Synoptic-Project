import { InjectRepository } from '@nestjs/typeorm';
import Service from '../../../helpers/Service';
import { Repository } from 'typeorm';
import { CreateAdminInput } from '../dto/create-admin.input';
import { Admin } from '../entities/Admin.entity';
import { Session } from '../entities/Session.entity';

import { UserService } from './user.service';
import { CreateUserInput } from '../dto/create-user.input';
import { CreateQuizInput } from '../../quiz/dto/create-quiz.input';
import { QuizService } from '../../quiz/quiz.service';

export class AdminService extends Service<Admin, CreateAdminInput> {
  type = Admin;

  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
    private userService: UserService,
    private quizService: QuizService
  ) {
    super(adminRepository);
  }

  async addUser(admin: Admin, createDTO: CreateUserInput) {
    const user = await this.userService.create(createDTO);

    const users = await admin.users;

    admin.users = Promise.resolve([...users, user]);
    return await this.save(admin);
  }

  async addQuiz(admin: Admin, createDTO: CreateQuizInput) {
    const quiz = await this.quizService.create(createDTO);

    const quizzes = await admin.quizzes;

    admin.quizzes = Promise.resolve([...quizzes, quiz]);
    return await this.save(admin);
  }

  async removeQuiz(admin: Admin, id: string) {
    admin.quizzes = Promise.resolve(
      (await admin.quizzes).filter((q) => q.id != id)
    );
    return this.save(admin);
  }

  async login(session: Session, username: string, password: string) {
    const admin = (
      await this.findBy({
        where: {
          username,
        },
      })
    ).filter((a) => a.checkPassword(password))[0];

    session.admin = Promise.resolve(admin);

    return session;
  }
}
