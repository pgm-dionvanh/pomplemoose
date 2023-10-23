import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from 'src/cart/entities/cart.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  async findOneByEmailWithPassword(email: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({
      select: {
        id: true,
        role: true,
        email: true,
        password: true,
      },
      where: { email: email },
    });

    return user;
  }

  async findCartsForUser(userId: number) {
    return await this.cartRepository.find({ where: { userId: userId } });
  }

  create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.usersRepository.create(createUserInput);

    return this.usersRepository.save(newUser).catch((e) => {
      if (/(email)[\s\S]+(already exists)/.test(e.detail)) {
        throw new BadRequestException(
          'Account with this email already exists.',
        );
      }
      return e;
    });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['wishlist'],
    });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneByOrFail({ email: email });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.usersRepository.preload({
      id: id,
      ...updateUserInput,
    });

    if (!user) {
      throw new NotFoundException(`There is no user under id ${id}`);
    }

    return this.usersRepository.save(user);
  }

  remove(id: number) {
    return this.usersRepository.softDelete(id);
  }
}
