import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '../../users/entities/user.entity';
import { UsersService } from '../../users/users.service';
import { POMPLE_JWT_SECRET } from '../../pomple.constant';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: POMPLE_JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { sub: id } = payload;
    const user = await this.userService.findOne(id);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
