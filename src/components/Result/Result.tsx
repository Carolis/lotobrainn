import React from 'react'
import { useLottery } from '../../context/Lottery'
import { useQuery } from '@apollo/client'
import { CONCURSOS } from '../../graphql/Concursos'
import { ResultContainer } from './styles'
import { ConcursoLoader } from '../Loader/Loader'

const Result: React.FC = () => {
  const { activeLottery } = useLottery()

  const { loading: loadingConcurso, data: concursoData } = useQuery(CONCURSOS, {
    variables: {
      id: activeLottery.activeBet
    }
  })

  if (loadingConcurso) {
    return (
      <ResultContainer>
        <ConcursoLoader />
      </ResultContainer>
    )
  }

  return (
    <ResultContainer>
      {concursoData?.concurso.numeros?.map((betId: number, index: number) => (
        <li key={`list-item-${index}`}>{betId}</li>
      ))}
    </ResultContainer>
  )
}

export default Result
