import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Category } from 'src/categories/entities/category.entity';
import { Color } from './entities/color.entity';
import { CreateColorInput } from './dto/create-color.input';
import { Size } from './entities/size.entity';
import { CreateSizeInput } from './dto/create-size.input';
import { ProductType } from './entities/productType.entity';
import { CreateProductTypeInput } from './dto/create-productType.input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  // create product
  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductInput);
  }

  // create color
  @Mutation(() => Color)
  createColor(
    @Args('createColorInput') createColorInput: CreateColorInput,
  ): Promise<Color> {
    return this.productsService.createColor(createColorInput);
  }

  // create size
  @Mutation(() => Size)
  createSize(
    @Args('createSizeInput') createSizeInput: CreateSizeInput,
  ): Promise<Color> {
    return this.productsService.createSize(createSizeInput);
  }

  // create productTypes
  @Mutation(() => ProductType)
  createProductType(
    @Args('createProductTypeInput')
    createProductTypeInput: CreateProductTypeInput,
  ): Promise<ProductType> {
    return this.productsService.createProductType(createProductTypeInput);
  }

  // find al products
  @Query(() => [Product], { name: 'products' })
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  // find all colors
  @Query(() => [Color], { name: 'colors' })
  findAllColors(): Promise<Color[]> {
    return this.productsService.findAllColor();
  }

  // find all size
  @Query(() => [Size], { name: 'sizes' })
  findAllSize(): Promise<Size[]> {
    return this.productsService.findAllSize();
  }

  // find all productType
  @Query(() => [ProductType], { name: 'productTypes' })
  findAllProductTypes(): Promise<ProductType[]> {
    return this.productsService.findAllProductType();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @ResolveField(() => Category)
  category(@Parent() product: Product): Promise<Category> {
    return this.productsService.getProductCategory(product.categoryId);
  }

  @ResolveField(() => ProductType)
  productType(@Parent() product: Product): Promise<ProductType> {
    return this.productsService.getProductType(product.productTypeId);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productsService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.remove(id);
  }
}
