import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response } from 'express';

import { Repository } from 'typeorm';
import { Root } from '../entities/Root.entity';
import { Session } from '../entities/Session.entity';

export class RootService {
  constructor(
    @InjectRepository(Root) private rootRepository: Repository<Root>
  ) {}

  async login(session: Session, password: string) {
    const root = await this.rootRepository.findOne('0');

    // create root if it does not exist
    if (root == null) {
      const root = new Root();
      root.username = 'root';
      root.id = '0';
      root._password = 'root';
      this.rootRepository.save(root);
    }

    if (root.checkPassword(password)) {
      session.root = Promise.resolve(root);
    }
    return session;
  }
}
