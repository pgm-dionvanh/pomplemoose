export interface Category {
    id: number
    name: string
}

export interface ProductType {
    id: number;
    name: string
}

export interface Cart {

    id: number;
    userId: number;
    productId: number;
    quantity: number;
    user: User;
    product: Product;
}


export interface User {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
    location: Location;
    cart: Cart[];

}

export interface Location {

  id: number;
  streetName: string;
  postCode: number;
  houseNumber: string;
  province?: string;
  country: string;

}

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    productTypeId: number;
    category: Category;
    productType: ProductType;
    cart: Cart[];

}