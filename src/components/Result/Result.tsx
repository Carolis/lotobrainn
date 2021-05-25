import React from 'react'
import { useLottery } from '../../context/Lottery'
import { useQuery } from '@apollo/client'
import { CONCURSOS } from '../../graphql/Concursos'

const Result: React.FC = () => {
  const { activeLottery } = useLottery()

  const { loading: loadingConcurso, data: concursoData } = useQuery(CONCURSOS, {
    variables: {
      id: activeLottery.activeBet
    }
  })

  if (loadingConcurso) {
    //todo skeleton
  }

  return (
    <ul>
      {concursoData?.concurso.numeros?.map((betId: number, index: number) => (
        <li key={`list-item-${index}`}>{betId}</li>
      ))}
    </ul>
  )
}

export default Result
