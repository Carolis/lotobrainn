import { gql } from '@apollo/client'

export const CONCURSOS_LOTERIAS = gql`
  query ConcursosLoterias {
    ConcursosLoterias {
      loteriaId
      concursoId
    }
  }
`
