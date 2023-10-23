import gql from "graphql-tag";

export const PRODUCTTYPE = gql`
query {
    productTypes {
        id
        name
      }
}

`