import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateWishlistInput } from './dto/create-wishlist.input';
import { UpdateWishlistInput } from './dto/update-wishlist.input';
import { Wishlist } from './entities/wishlist.entity';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlistRepository: Repository<Wishlist>,
    private productService: ProductsService,
    private userService: UsersService,
  ) {}

  create(createWishlistInput: CreateWishlistInput): Promise<Wishlist> {
    const newWishlist = this.wishlistRepository.create(createWishlistInput);
    return this.wishlistRepository.save(newWishlist);
  }

  async findAll(): Promise<Wishlist[]> {
    return this.wishlistRepository.find();
  }

  findOne(id: number): Promise<Wishlist> {
    return this.wishlistRepository.findOneByOrFail({ id });
  }

  update(id: number, updateWishlistInput: UpdateWishlistInput) {
    return `This action updates a #${id} wishlist`;
  }

  async remove(id: number): Promise<Wishlist> {
    const wishlist = await this.findOne(id);
    return this.wishlistRepository.remove(wishlist);
  }

  getProductWishlist(productId: number): Promise<Product> {
    return this.productService.findOne(productId);
  }

  getUserWishlist(userId: number): Promise<User> {
    return this.userService.findOne(userId);
  }
}
