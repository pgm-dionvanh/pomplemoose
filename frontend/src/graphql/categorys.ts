import { gql } from '@apollo/client'


export const CATEGORYS = gql`
query {
  categories {
    id
    name
  }
}
`

export interface CategorysQueryResponse {
  categories: [];
}