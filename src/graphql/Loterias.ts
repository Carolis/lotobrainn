import { gql } from '@apollo/client'

export const LOTERIAS = gql`
  query Loterias {
    loterias {
      id
      nome
    }
  }
`
