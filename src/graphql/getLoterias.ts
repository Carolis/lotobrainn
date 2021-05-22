import { gql } from '@apollo/client'

export const GET_LOTERIAS = gql`
  query getLoterias {
    loterias {
      id
      nome
    }
  }
`
