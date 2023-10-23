import { gql } from '@apollo/client'


export const PRODUCTS = gql`
query {
  products {
    id
    name
    price
    description
    categoryId
    productTypeId
    category {
      id
      name
    }
    productType {
      id
      name
    },
    imageUrl

  }
}
`

export const PRODUCT_BY_ID = gql`
query ($id: Int!) {
	product(id: $id) { 
    id
  	name
    price
    description
    productType { 
    	name
    }
    sizes { 
    	name
    }
    colors { 
    	name
    }
    imageUrl
  }
}
`;

export interface ProductsQueryResponse {
  products: [];
}

export interface ProductQueryResponse {
  product: {
    id: number;
    name: string;
    imageUrl: string | undefined;
    price: number;
    colors: [
      name: string,
      code: number,
    ],
    sizes: [
      id: string,
      name: string,
    ]
  };
}