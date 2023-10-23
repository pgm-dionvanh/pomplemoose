import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CartService } from './cart.service';
import { Cart } from './entities/cart.entity';
import { CreateCartInput } from './dto/create-cart.input';
import { UpdateCartInput } from './dto/update-cart.input';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';

@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Mutation(() => Cart)
  createCart(@Args('createCartInput') createCartInput: CreateCartInput) {
    return this.cartService.create(createCartInput);
  }

  @Query(() => [Cart], { name: 'carts' })
  findAll() {
    return this.cartService.findAll();
  }

  @Query(() => [Cart], { name: 'cartsbyuser' })
  findAllByUser(@Args('userId', { type: () => Int }) userId: number) {
    return this.cartService.findAllByUser(userId);
  }

  @ResolveField(() => User)
  user(@Parent() cart: Cart): Promise<User> {
    return this.cartService.findCartUser(cart.userId);
  }

  @ResolveField(() => Product)
  product(@Parent() cart: Cart): Promise<Product> {
    return this.cartService.findCartProduct(cart.productId);
  }

  @Query(() => Cart, { name: 'cart' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cartService.findOne(id);
  }

  @Mutation(() => Cart)
  updateCart(@Args('updateCartInput') updateCartInput: UpdateCartInput) {
    return this.cartService.update(updateCartInput.id, updateCartInput);
  }

  @Mutation(() => Cart)
  removeCart(@Args('id', { type: () => Int }) id: number) {
    return this.cartService.remove(id);
  }
}
