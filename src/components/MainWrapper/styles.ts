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
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 120vh;
    top: -10vh;
    position: relative;
    border-top-left-radius: 15% 50%;
    border-bottom-left-radius: 15% 50%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`
