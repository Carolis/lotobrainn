import styled from 'styled-components'

export const ResultContainer = styled.ul`
  height: 45vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #efefef;
  clip-path: ellipse(100vw 50%);
  margin-top: -5rem;
  flex-wrap: wrap;
  li {
    background-color: #fff;
    width: clamp(6rem, 6rem, 10rem);
    height: clamp(6rem, 6rem, 10rem);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
