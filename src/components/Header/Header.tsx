import React from 'react'
import ComboBox from '../ComboBox/ComboBox'
import LotteryDate from '../LotteryDate/LotteryDate'
import GlobalStyles from '../../styles/global'
import { useLottery } from '../../context/Lottery'
import { ThemeProvider } from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize'
import {
  HeaderTitle,
  HeaderSidebar,
  StyledLogo,
  LogoWrapper,
  DateTimeWrapper
} from './styles'
import { size } from '../../styles/sizes'

const Header = (): JSX.Element => {
  const windowSize = useWindowSize()
  const { activeLottery } = useLottery()
  const theme = {
    colors: {
      primary: activeLottery.lotteryTheme
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeaderSidebar>
        <ComboBox />
        <LogoWrapper>
          <StyledLogo />
          <HeaderTitle>{activeLottery.name}</HeaderTitle>
        </LogoWrapper>
        <DateTimeWrapper>
          {windowSize.width >= size.desktop ? (
            <>
              <span>Concurso</span>
              <span className="concursoDate">
                {activeLottery.activeBet} – <LotteryDate />
              </span>
            </>
          ) : (
            <span>Concurso Nº {activeLottery.activeBet}</span>
          )}
        </DateTimeWrapper>
      </HeaderSidebar>
    </ThemeProvider>
  )
}

export default Header
