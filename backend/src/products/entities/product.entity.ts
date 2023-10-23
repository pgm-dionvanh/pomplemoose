import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Category } from '../../categories/entities/category.entity';
import { Cart } from '../../cart/entities/cart.entity';

import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { Color } from './color.entity';
import { ProductType } from './productType.entity';
import { Wishlist } from '../../wishlist/entities/wishlist.entity';
import { Size } from './size.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  imageUrl: string;

  @Field(() => Int)
  @Column()
  categoryId: number;

  @Field(() => Int)
  @Column()
  productTypeId: number;

  @ManyToOne(() => Category, (category) => category.products)
  @Field(() => Category)
  category: Category;

  @ManyToOne(() => ProductType, (productType) => productType.products)
  @Field(() => ProductType)
  productType: ProductType;

  @OneToMany(() => Cart, (cart) => cart.product)
  cart: Cart[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.products)
  @Field(() => [Wishlist], { nullable: true })
  wishlist?: Wishlist[];

  @ManyToMany(() => Color, (color: Color) => color.products, { eager: true })
  @Field(() => [Color])
  @JoinTable()
  colors: Color[];

  @ManyToMany(() => Size, (size: Size) => size.products, { eager: true })
  @Field(() => [Size])
  @JoinTable()
  sizes: Size[];

  /*
  @ManyToMany(() => Color, (color) => color.products)
  @JoinTable({
    name: 'product_color',
    joinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'color_id',
      referencedColumnName: 'id',
    },
  })
  colors?: Color[];
  */
}
