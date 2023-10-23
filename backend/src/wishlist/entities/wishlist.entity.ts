import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Wishlist {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => Int)
  productId: number;

  @Column()
  @Field(() => Int)
  userId: number;

  @ManyToOne(() => Product, (product) => product.wishlist)
  @Field(() => Product)
  products: Product;

  @ManyToOne(() => User, (user) => user.wishlist)
  @Field(() => User)
  user: User;
}
