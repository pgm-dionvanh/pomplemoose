import { InputType, Int, Field, } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateColorInput } from 'src/products/dto/create-color.input';

@InputType()
export class CreateCartInput {
  @IsNotEmpty()
  @Field()
  userId: number;

  @IsNotEmpty()
  @Field()
  productId: number;

  @IsNotEmpty()
  @Field()
  quantity: number;

  @Field(() => String)
  color: string;
}
