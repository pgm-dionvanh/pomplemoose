import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Entity,
  JoinTable,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Product } from '../../products/entities/product.entity';
import { Color } from 'src/products/entities/color.entity';
@Entity()
@ObjectType()
export class Cart {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  public id: number;

  @Column()
  @Field(() => Int)
  public userId!: number;

  @Column()
  @Field(() => Int)
  public productId!: number;

  @Column({ nullable: false })
  @Field(() => Int)
  quantity: number;

  @Column()
  @Field(() => String)
  color: string;

  @ManyToOne(() => User, (user) => user.cart)
  @Field(() => User)
  public user: User;

  @ManyToOne(() => Product, (product) => product.cart)
  @Field(() => Product)
  public product: Product;
}
