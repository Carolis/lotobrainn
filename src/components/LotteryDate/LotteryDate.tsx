import React from 'react'
import { useLottery } from '../../context/Lottery'
import { useQuery } from '@apollo/client'
import { CONCURSOS } from '../../graphql/Concursos'
import { normalizeDate } from '../../utils/utils'

const LotteryDate = (): JSX.Element | null => {
  const { activeLottery } = useLottery()

  const { loading: loadingConcurso, data: concursoData } = useQuery(CONCURSOS, {
    variables: {
      id: activeLottery.activeBet
    }
  })

  if (loadingConcurso) {
    return <div>Loading</div>
  }

  if (concursoData) {
    const concursoDate = normalizeDate(concursoData?.concurso?.data)
    return <>{concursoDate}</>
  }
  return null
}

export default LotteryDate
