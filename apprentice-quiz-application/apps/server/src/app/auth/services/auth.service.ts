import { Request, Response } from 'express';

import { Injectable } from '@nestjs/common';

import { CreateSessionInput } from '../dto/create-session.input';
import { Session } from '../entities/Session.entity';
import Service from '../../../helpers/Service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Root } from '../entities/Root.entity';
import { Admin } from '../entities/Admin.entity';
import { User } from '../entities/User.entity';

@Injectable()
export class AuthService extends Service<Session, CreateSessionInput> {
  type = Session;

  constructor(
    @InjectRepository(Session) repository: Repository<Session>,
    @InjectRepository(Root) private rootRepository: Repository<Root>,
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
    @InjectRepository(User) private UserRepository: Repository<User>
  ) {
    super(repository);
  }

  async getSession(context: { req: Request; res: Response }): Promise<Session> {
    const sessionID = context.req.cookies['sessionID'];

    console.log(`[AuthService:getSession] sessionID: ${sessionID} `);

    // check if session exists
    if (sessionID != null) {
      const session = await this.findById(sessionID);
      if (session != null) return session;
    }

    const session = await this.create({});
    context.res.cookie('sessionID', session.id);
    return session;
  }

  async logout(context: { req: Request; res: Response }) {
    const session = await this.getSession(context);
    session.admin = Promise.resolve(null);
    session.root = Promise.resolve(null);
    session.user = Promise.resolve(null);
    return await this.save(session);
  }
}
