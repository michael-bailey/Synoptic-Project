import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const DB_HOST = process.env['DB_HOST'] ?? 'localhost';
const DB_PORT = process.env['DB_PORT'] ?? '';

@Module({
  imports: [
    // setting up database
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      port: parseInt(DB_PORT),

      username: 'main',
      password: 'synoptic',

      database: 'main',

      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
