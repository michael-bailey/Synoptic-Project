import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppService } from './app.service';
import { AppResolver } from './app.resolver';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';

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
    GraphQLModule.forRoot({
      debug: false,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
    }),
    AuthModule,
  ],
  controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
