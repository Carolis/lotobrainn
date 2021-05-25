import React from 'react'
import Header from '../Header/Header'
import Result from '../Result/Result'
import LotteryProvider from '../../context/Lottery'

const MainWrapper: React.FC = () => {
  return (
    <LotteryProvider>
      <div>
        <Header />
        <Result />
      </div>
    </LotteryProvider>
  )
}

export default MainWrapper
