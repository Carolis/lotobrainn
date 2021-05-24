import React, { createContext, useState, useContext } from 'react'
import { LotteryContextState } from './types'

const contextDefaultValues: LotteryContextState = {
  activeLottery: {
    name: 'mega-sena',
    id: 0
  },
  setActiveLottery: () => {
    null
  }
}

const LotteryContext = createContext<LotteryContextState>(contextDefaultValues)

const LotteryProvider: React.FC = ({ children }) => {
  const [activeLottery, setActiveLottery] = useState(
    contextDefaultValues.activeLottery
  )

  return (
    <LotteryContext.Provider value={{ activeLottery, setActiveLottery }}>
      {children}
    </LotteryContext.Provider>
  )
}

export default LotteryProvider

export const useLottery = (): LotteryContextState => {
  const context = useContext(LotteryContext)
  const { activeLottery, setActiveLottery } = context
  return { activeLottery, setActiveLottery }
}
