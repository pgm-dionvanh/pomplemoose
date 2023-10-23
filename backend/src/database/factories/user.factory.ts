import { User } from '../../users/entities/user.entity';
import { Role } from '../../users/entities/role.enum';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

define(User, (Faker: typeof faker) => {
  const user = new User();

  const email = Faker.internet.email();

  const password = Faker.internet.password();

  user.firstName = Faker.name.firstName();
  user.lastName = Faker.name.lastName();
  user.email = email;
  user.password = password;
  user.role = Role.Customer;

  return user;
});
