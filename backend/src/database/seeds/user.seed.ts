import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../../users/entities/user.entity';
import { DataSource } from 'typeorm'; /* Updated typeorm-seeding to DataSource */

export default class UserSeeder implements Seeder {
  public async run(factory: Factory, connection: DataSource) {
    await factory(User)().createMany(5);
  }
}
