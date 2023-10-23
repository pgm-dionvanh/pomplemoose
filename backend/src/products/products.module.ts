import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { Category } from 'src/categories/entities/category.entity';
import { Color } from './entities/color.entity';
import { Size } from './entities/size.entity';
import { ProductType } from './entities/productType.entity';
import { Wishlist } from 'src/wishlist/entities/wishlist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Category,
      Color,
      Size,
      ProductType,
      Wishlist,
    ]),
    CategoriesModule,
  ],
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsService, TypeOrmModule],
})
export class ProductsModule {}
