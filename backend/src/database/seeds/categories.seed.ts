import { Factory, Seeder } from 'typeorm-seeding';
import { Connection, DataSource } from 'typeorm'; /* Updated typeorm-seeding to DataSource */
import { Category } from '../../categories/entities/category.entity';

export default class CategoriesSeeder implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<void> {
    const categories = [
      'Women',
      "Women's Active Wear",
      'Men',
      'Men Active Wear',
      'Accessories',
    ];

    for (let index = 0; index < categories.length; index++) {
      const categoryRepo = await connection.getRepository(Category);
      const findCategoryByName = await categoryRepo.findOne({
        where: { name: categories[index].toString() },
      });

      if (!findCategoryByName) {
        await factory(Category)({
          name: categories[index],
        }).create();
      }
    }
  }
}
