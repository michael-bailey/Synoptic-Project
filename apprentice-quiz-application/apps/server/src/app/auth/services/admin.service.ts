import { InjectRepository } from '@nestjs/typeorm';
import Service from '../../../helpers/Service';
import { Repository } from 'typeorm';
import { CreateAdminInput } from '../dto/create-admin.input';
import { Admin } from '../entities/Admin.entity';
import { Session } from '../entities/Session.entity';
import { Root } from '../entities/Root.entity';
import { UserService } from './user.service';
import { CreateUserInput } from '../dto/create-user.input';

export class AdminService extends Service<Admin, CreateAdminInput> {
  type = Admin;

  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
    private userService: UserService
  ) {
    super(adminRepository);
  }

  async addUser(admin: Admin, createDTO: CreateUserInput) {
    const user = await this.userService.create(createDTO);

    const users = await admin.users;

    admin.users = Promise.resolve([...users, user]);
    return await this.adminRepository.save(admin);
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
