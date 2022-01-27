import { InjectRepository } from '@nestjs/typeorm';
import Service from '../../../helpers/Service';
import { Repository } from 'typeorm';

import { Admin } from '../entities/Admin.entity';
import { Session } from '../entities/Session.entity';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../entities/User.entity';

export class UserService extends Service<User, CreateUserInput> {
  type = User;

  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }

  async login(session: Session, username: string, password: string) {
    const user = (
      await this.findBy({
        where: {
          username,
        },
      })
    ).filter((a) => a.checkPassword(password))[0];

    session.user = Promise.resolve(user);

    return session;
  }
}
