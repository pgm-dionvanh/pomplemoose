import { Category } from '../../categories/entities/category.entity';
import { define } from 'typeorm-seeding';

define(Category, (context: { name?: string }) => {
  const category = new Category();
  category.name = context.name;
  return category;
});
