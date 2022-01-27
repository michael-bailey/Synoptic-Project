import { InjectRepository } from '@nestjs/typeorm';
import Service from '../../../helpers/Service';
import { Repository } from 'typeorm';
import { CreateAdminInput } from '../dto/create-admin.input';
import { Admin } from '../entities/Admin.entity';
import { Session } from '../entities/Session.entity';

export class AdminService extends Service<Admin, CreateAdminInput> {
  type = Admin;

  constructor(@InjectRepository(Admin) repository: Repository<Admin>) {
    super(repository);
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
