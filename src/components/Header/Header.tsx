import React from 'react'
import ComboBox from '../ComboBox/ComboBox'
import GlobalStyles from '../../styles/global'
import { useLottery } from '../../context/Lottery'
import { ThemeProvider } from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize'
import { HeaderTitle, HeaderSidebar, StyledLogo, LogoWrapper } from './styles'
import { size } from '../../styles/sizes'

const Header: React.FC = () => {
  const { width } = useWindowSize()
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
        {width > size.desktop ? (
          <span>seila</span>
        ) : (
          <span>Concurso Nº {activeLottery.activeBet}</span>
        )}
      </HeaderSidebar>
    </ThemeProvider>
  )
}

export default Header
