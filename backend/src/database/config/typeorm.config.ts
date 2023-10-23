import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

const configService: ConfigService = new ConfigService();

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'notadb',
  database: configService.get('DB_DATABASE'),
  entities: ['../../**/*.entity{.ts,.js}'],

  synchronize: true,
};

module.exports = typeOrmConfig;
