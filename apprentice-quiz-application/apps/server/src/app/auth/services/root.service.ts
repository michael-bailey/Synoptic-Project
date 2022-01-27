import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';

import { Repository } from 'typeorm';
import { CreateAdminInput } from '../dto/create-admin.input';
import { Root } from '../entities/Root.entity';
import { Session } from '../entities/Session.entity';
import { AdminService } from './admin.service';

export class RootService {
  constructor(
    @InjectRepository(Root) private rootRepository: Repository<Root>,
    private adminService: AdminService
  ) {}

  async addAdmin(root: Root, createDTO: CreateAdminInput) {
    const admin = await this.adminService.create(createDTO);

    root.admins = Promise.resolve([...(await root.admins), admin]);
    return await this.rootRepository.save(root);
  }

  async login(session: Session, password: string) {
    let root = await this.rootRepository.findOne('0');

    // create root if it does not exist
    if (root == null) {
      console.log('no root');
      root = new Root();
      root.username = 'root';
      root.id = '0';
      root.password = 'root';
      root = await this.rootRepository.save(root);
    }

    if (root.checkPassword(password)) {
      session.root = Promise.resolve(root);
    }
    return session;
  }
}
