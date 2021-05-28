import styled from 'styled-components'
import { device } from '../../styles/sizes'

export const MainContainer = styled.div`
  height: 100vh;
  display: block;
  @media ${device.desktop} {
    display: flex;
  }
`
export const MainContentWrapper = styled.div`
  border-top-left-radius: 70% 10%;
  border-top-right-radius: 70% 10%;
  background-color: var(--less-white);
  min-height: 50vh;
  @media ${device.desktop} {
    width: 75vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    border-top-left-radius: 5% 50%;
    border-bottom-left-radius: 5% 50%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`
