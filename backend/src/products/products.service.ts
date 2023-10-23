import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesService } from '../categories/categories.service';
import { Category } from '../categories/entities/category.entity';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { CreateColorInput } from './dto/create-color.input';
import { Color } from './entities/color.entity';
import { Size } from './entities/size.entity';
import { CreateSizeInput } from './dto/create-size.input';
import { ProductType } from './entities/productType.entity';
import { CreateProductTypeInput } from './dto/create-productType.input';
import { Wishlist } from 'src/wishlist/entities/wishlist.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Color) private colorRepository: Repository<Color>,
    @InjectRepository(Size) private sizeRepository: Repository<Size>,
    @InjectRepository(ProductType)
    private productTypeRepository: Repository<ProductType>,
    private categoryService: CategoriesService,
  ) {}

  // create product
  createProduct(createProductInput: CreateProductInput): Promise<Product> {
    const newProduct = this.productRepository.create(createProductInput);
    return this.productRepository.save(newProduct);
  }
  // create color
  createColor(createColorInput: CreateColorInput): Promise<Color> {
    const newColor = this.colorRepository.create(createColorInput);
    return this.colorRepository.save(newColor);
  }
  // create size
  createSize(createSizeInput: CreateSizeInput): Promise<Size> {
    const newSize = this.sizeRepository.create(createSizeInput);
    return this.sizeRepository.save(newSize);
  }

  createProductType(
    createProductTypeInput: CreateProductTypeInput,
  ): Promise<ProductType> {
    const newProductType = this.productTypeRepository.create(
      createProductTypeInput,
    );
    return this.productTypeRepository.save(newProductType);
  }

  // find size
  async findAllSize(): Promise<Size[]> {
    return this.sizeRepository.find();
  }

  // find color
  async findAllColor(): Promise<Color[]> {
    return this.colorRepository.find();
  }

  // find product
  async findAll(): Promise<Product[]> {
    return this.productRepository.find({
      relations: {
        colors: true,
      },
    });
  }

  // find productType
  async findAllProductType(): Promise<ProductType[]> {
    return this.productTypeRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOneByOrFail({ id });
  }

  getProductType(productTypeId: number): Promise<ProductType> {
    return this.productTypeRepository.findOne({ where: { id: productTypeId } });
  }

  getProductCategory(categoryId: number): Promise<Category> {
    return this.categoryService.findOne(categoryId);
  }

  getProductColor(colorId: number): Promise<Color> {
    return this.colorRepository.findOne({ where: { id: colorId } });
  }

  getProductSize(sizeId: number): Promise<Size> {
    return this.sizeRepository.findOne({ where: { id: sizeId } });
  }

  async findAllColors(ids: number[]): Promise<Color[]> {
    return this.colorRepository.findByIds(ids);
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number): Promise<Product> {
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
  }
}
