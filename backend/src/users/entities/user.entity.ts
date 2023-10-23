import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  BeforeInsert,
  OneToOne,
} from 'typeorm';
import { Role } from './role.enum';
import * as bcrypt from 'bcrypt';
import { Location } from '../../location/entities/location.entity';
import { Cart } from '../../cart/entities/cart.entity';
import { Wishlist } from '../../wishlist/entities/wishlist.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;

  @Column()
  @Field()
  email: string;

  @Column({ select: false })
  @Field()
  password: string;

  @Column({ default: Role.Customer, enum: Role })
  role?: Role;

  @JoinColumn()
  @OneToMany(() => Location, (location) => location.user)
  location: Location;

  @OneToMany(() => Cart, (cartItem) => cartItem.user)
  @Field(() => Cart)
  cart: Cart[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.products)
  @Field(() => [Wishlist], { nullable: true })
  wishlist?: Wishlist[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }
}
