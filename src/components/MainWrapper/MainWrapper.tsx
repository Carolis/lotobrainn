import React from 'react'
import Header from '../Header/Header'
import Result from '../Result/Result'
import Footer from '../Footer/Footer'
import LotteryProvider from '../../context/Lottery'
import { MainContainer } from './styles'

const MainWrapper: React.FC = () => {
  return (
    <LotteryProvider>
      <MainContainer>
        <Header />
        <Result />
        <Footer />
      </MainContainer>
    </LotteryProvider>
  )
}

export default MainWrapper
