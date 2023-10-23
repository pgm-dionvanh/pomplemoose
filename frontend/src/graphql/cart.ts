import gql from "graphql-tag";

export const CREATE_CART = gql`
mutation ($productId: Float!, $quantity: Float!, $userId: Float!, $color: String!) {
  createCart(createCartInput: { productId: $productId, quantity: $quantity, userId: $userId, color: $color }){
  	productId
    quantity
    userId
  }
}
`;

export const REMOVE_CART_BY_ID = gql`
mutation ($id: Int!) {
  removeCart(id: $id) {
    quantity
  }
}`;

export const CART_BY_USER_ID = gql`query ($userId: Int!) {
	cartsbyuser(userId: $userId) { 
    id
    quantity
    product {
      name,
      imageUrl,
      colors {
        name
      }
      sizes {
        name
      }
      price
    }
}
}
`;

export interface Cart {
  id: number;
  product: {
    name: string;
    imageUrl: string
    price: string;
  },
  quantity: number;
}

export interface CartsQueryResponse {
  cartsbyuser: Cart[];
}

