import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppResolver } from './app.resolver';
import { Branch } from './branch.entity';

@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'host.docker.internal',
    port: 5432,
    username: 'nicolasgirardot',
    password: '',
    database: 'helm-test',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Branch])],
  providers: [AppService, AppResolver],
})
export class AppModule { }
