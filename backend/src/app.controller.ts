import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { WishlistService } from './wishlist/wishlist.service';
import { CreateWishlistInput } from './wishlist/dto/create-wishlist.input';
import { Wishlist } from './wishlist/entities/wishlist.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private wishlistService: WishlistService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('wishlist')
  getAllWishlist() {
    return this.wishlistService.findAll();
  }

  @Post('createWishlist')
  async postWishlist(@Request() req): Promise<Wishlist> {
    const { productId, userId } = req.body;
    const wishlist = this.wishlistService.create({
      productId,
      userId,
    });
    return wishlist;
  }
}
