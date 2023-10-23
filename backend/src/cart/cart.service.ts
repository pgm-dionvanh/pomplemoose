import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';
import { Cart } from './entities/cart.entity';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly CartRepository: Repository<Cart>,
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
    @InjectRepository(Product)
    private readonly ProductRepository: Repository<Product>,
  ) {}

  create(createCartInput: CreateCartInput) {
    const newProduct = this.CartRepository.create(createCartInput);
    return this.CartRepository.save(newProduct);
  }

  findCartUser(id: number) {
    return this.UserRepository.findOne({ where: { id: id } });
  }

  findCartProduct(id: number) {
    return this.ProductRepository.findOne({ where: { id: id } });
  }

  findAll() {
    return this.CartRepository.find();
  }

  findAllByUser(userId: number) {
    return this.CartRepository.find({ where: { userId: userId } });
  }

  findOne(id: number) {
    return this.CartRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateCartInput: UpdateCartInput) {
    return `This action updates a #${id} cart`;
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    return this.CartRepository.remove(product);
  }
}
