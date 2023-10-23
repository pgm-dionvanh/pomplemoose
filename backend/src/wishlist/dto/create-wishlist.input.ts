import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';

@InputType()
export class CreateWishlistInput {
  @Column()
  @Field(() => Int)
  productId: number;

  @Column()
  @Field(() => Int)
  userId: number;
}
