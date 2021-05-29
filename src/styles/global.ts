import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root {
    --white: #fff;
    --black: #000;
    --less-black: #333;
    --less-white: #efefef;
}

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 html {
    font-size: 62.5%;
    background-color: var(--less-white);
 }

 body {
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    overflow: hidden;
 }

 aside, div {
    background-color: ${(props) => props.theme.colors.primary}
 }

 h1 {
    font-size: 3rem;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
 }

 li {
    list-style-type: none;
    font-weight: bold;
    color: var(--less-black);
    font-size: 2rem;
     @media(min-width: 1200px){
        font-size: 2.7rem;
     }
 }

`

export default GlobalStyles
