import { Request, Response } from 'express';

import { Injectable } from '@nestjs/common';

import { CreateSessionInput } from './dto/create-session.input';
import { Session } from './entities/Session.entity';
import Service from '../../helpers/Service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService extends Service<Session, CreateSessionInput> {
  type = Session;

  constructor(@InjectRepository(Session) repository: Repository<Session>) {
    super(repository);
  }

  async getSession(context: { req: Request; res: Response }): Promise<Session> {
    const sessionID = context.req.cookies['sessionID'];

    // check if session exists
    if (sessionID != null) {
      const session = await this.findById(sessionID);
      if (session != null) return session;
      return this.create({});
    }

    const session = await this.create({});
    context.res.cookie('sessionID', session.id);
    return session;
  }
}
