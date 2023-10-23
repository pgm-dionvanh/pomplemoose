import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from '../common/interfaces/jwt-payload.interface';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  @Inject(UsersService)
  private readonly userService: UsersService;
  @Inject(JwtService)
  private readonly jwtService: JwtService;

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOneByEmailWithPassword(email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }

  async login(user): Promise<{ accessToken: string }> {
    user = await this.userService.findOneByEmailWithPassword(user.username);

    const payload: JwtPayload = {
      firstName: user.firstName,
      lastName: user.lastName,
      mail: user.email,
      role: user.role,
      sub: user.id,
    };
    const signedToken = this.jwtService.sign(payload);

    return {
      accessToken: signedToken,
    };
  }
}
