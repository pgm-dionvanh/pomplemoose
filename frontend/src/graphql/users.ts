import { gql } from '@apollo/client'


export const USERS = gql`
query {
  users {
    id
  }
}
`

export interface UsersQueryResponse {
  users: [];
}