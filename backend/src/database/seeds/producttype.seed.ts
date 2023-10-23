import { Factory, Seeder } from 'typeorm-seeding';
import { DataSource } from 'typeorm'; /* Updated typeorm-seeding to DataSource */
import { ProductType } from '../../products/entities/productType.entity';
export default class ProductTypeSeeder implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<void> {
    const productTypes = [
      'Tops',
      'Bottoms',
      'Shorts',
      'Skirts & dresses',
      'Accessoires',
    ];

    for (let index = 0; index < productTypes.length; index++) {
      const productTypeRepo = await connection.getRepository(ProductType);
      const productTypeFound = await productTypeRepo.findOne({
        where: { name: productTypes[index].toString() },
      });

      if (!productTypeFound) {
        await factory(ProductType)({
          name: productTypes[index],
        }).create();
      }
    }
  }
}
