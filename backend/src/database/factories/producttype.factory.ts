import { define } from 'typeorm-seeding';
import { ProductType } from '../../products/entities/productType.entity';

define(ProductType, (context: { name?: string }) => {
  const productType = new ProductType();
  productType.name = context.name;
  return productType;
});
