import React, { createContext, useState, useContext, useEffect } from 'react'
import { LotteryContextState } from './types'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const parsedState = JSON.parse(
  localStorage.getItem('activeLottery') ||
    '{"name":"mega-sena","id":"0","lotteryTheme":"#6BEFA3","activeBet":"2359"}'
)

const contextDefaultValues: LotteryContextState = {
  activeLottery: parsedState,
  setActiveLottery: () => {
    null
  }
}

const LotteryContext = createContext<LotteryContextState>(contextDefaultValues)

const LotteryProvider = ({ children }: Props): JSX.Element => {
  const [activeLottery, setActiveLottery] = useState(
    contextDefaultValues.activeLottery
  )

  useEffect(() => {
    if (stringifiedState != '{}') {
      localStorage.setItem('activeLottery', stringifiedState)
    }
  }, [activeLottery])

  useEffect(() => {
    if (parsedState != '{}') {
      setActiveLottery(parsedState)
    }
  }, [])

  const stringifiedState = JSON.stringify(activeLottery)

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
