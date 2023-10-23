import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  POMPLE_JWT_EXPIRATION_IN_MS,
  POMPLE_JWT_SECRET,
} from '../pomple.constant';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        secret: POMPLE_JWT_SECRET,
        signOptions: { expiresIn: POMPLE_JWT_EXPIRATION_IN_MS },
      }),
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
