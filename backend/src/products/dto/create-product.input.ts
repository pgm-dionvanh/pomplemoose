import { InputType, Int, Field } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { Color } from '../entities/color.entity';
import { CreateColorInput } from './create-color.input';
import { CreateSizeInput } from './create-size.input';

@InputType()
export class CreateProductInput {
  @Column()
  @Field()
  name: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  imageUrl: string;

  @Column()
  @Field(() => Int)
  categoryId: number;

  @Column()
  @Field(() => Int)
  productTypeId: number;

  @Field(() => [CreateColorInput])
  color: CreateColorInput[];

  @Field(() => [CreateSizeInput])
  size: CreateSizeInput[];
}
