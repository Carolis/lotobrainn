import styled from 'styled-components'
import { ReactComponent as Logo } from '../../images/Logo.svg'
import { device } from '../../styles/sizes'

export const HeaderTitle = styled.h1``

export const HeaderSidebar = styled.aside`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media ${device.desktop} {
    height: 100vh;
    width: 25vw;
    justify-content: space-between;
    padding: 6rem;
    align-items: flex-start;
  }
`

export const StyledLogo = styled(Logo)`
  width: 6rem;
  margin: 0 0 1rem 0;
  @media ${device.desktop} {
    margin: 0 2rem 0 0;
  }
`
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.desktop} {
    flex-direction: row;
  }
`
export const DateTimeWrapper = styled.div`
  text-align: center;
  text-transform: uppercase;
  span {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--white);
  }
  span.concursoDate {
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 0;
  }
  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-size: 1.4rem;
      letter-spacing: 0.135em;
      font-weight: 500;
      color: var(--white);
      letter-spacing: 0.135em;
    }
  }
`
