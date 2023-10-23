import gql from "graphql-tag"

export const CREATE_WHISLIST = gql `
mutation CreateWishlist($productId: Int! , $userId: Int! ) {
    createWishlist(data: {productId: $productId, userId: $userId}) {
        id
    }
}
`

