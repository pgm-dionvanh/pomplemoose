import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSizeInput {
  @Field()
  name: string;
}
