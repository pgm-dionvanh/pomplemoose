import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserInput } from '../users/dto/create-user.input';
import { LoginUserInput } from '../users/dto/login-user.input';
import { Role } from '../users/entities/role.enum';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt.guard';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private readonly authService: AuthService;
  @Inject(UsersService)
  private readonly userService: UsersService;

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request): Promise<{ accessToken: string }> {
    return this.authService.login(req.body as LoginUserInput);
  }

  @Post('register')
  async register(@Body() data: CreateUserInput): Promise<LoginUserInput> {
    data.role = Role.Customer;
    const foundUser = await this.userService.findOneByEmailWithPassword(
      data.email,
    );

    if (foundUser) {
      throw new UnauthorizedException();
    }

    const user = await this.userService.create({
      ...data,
    });

    const userCopy = Object.assign({}, user);
    delete userCopy.password;
    return userCopy;
  }

  @UseGuards(JwtAuthGuard)
  @Get('whoami')
  whoAmI(@Req() req: Request) {
    return req;
  }
}
