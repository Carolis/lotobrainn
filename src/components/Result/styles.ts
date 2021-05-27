import styled from 'styled-components'
import { device } from '../../styles/sizes'

export const ResultContainer = styled.ul`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #efefef;
  border-top-left-radius: 70% 70%;
  border-top-right-radius: 70% 70%;
  flex-wrap: wrap;
  padding-top: 6rem;
  @media ${device.desktop} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
    border-top-left-radius: 15% 50%;
    border-bottom-left-radius: 15% 50%;
  }
  li {
    background-color: #fff;
    @media ${device.desktop} {
      width: 10rem;
      height: 10rem;
    }
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
