import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { WishlistService } from './wishlist.service';
import { Wishlist } from './entities/wishlist.entity';
import { CreateWishlistInput } from './dto/create-wishlist.input';
import { UpdateWishlistInput } from './dto/update-wishlist.input';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Wishlist)
export class WishlistResolver {
  constructor(private readonly wishlistService: WishlistService) {}

  @Mutation(() => Wishlist)
  createWishlist(
    @Args('createWishlistInput') createWishlistInput: CreateWishlistInput,
  ): Promise<Wishlist> {
    return this.wishlistService.create(createWishlistInput);
  }

  @Query(() => [Wishlist], { name: 'wishlists' })
  findAll() {
    return this.wishlistService.findAll();
  }

  @Query(() => Wishlist, { name: 'wishlist' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.wishlistService.findOne(id);
  }

  @Mutation(() => Wishlist)
  updateWishlist(
    @Args('updateWishlistInput') updateWishlistInput: UpdateWishlistInput,
  ) {
    return this.wishlistService.update(
      updateWishlistInput.id,
      updateWishlistInput,
    );
  }

  @Mutation(() => Wishlist)
  removeWishlist(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Wishlist> {
    return this.wishlistService.remove(id);
  }

  @ResolveField(() => Product)
  products(@Parent() wishlist: Wishlist): Promise<Product> {
    return this.wishlistService.getProductWishlist(wishlist.productId);
  }

  @ResolveField(() => User)
  user(@Parent() wishlist: Wishlist): Promise<User> {
    return this.wishlistService.getUserWishlist(wishlist.userId);
  }

}
