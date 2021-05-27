import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 html {
    font-size: 62.5%;
    background-color: #efefef;
 }

 body {
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
 }

 aside, div {
    background-color: ${(props) => props.theme.colors.primary}
 }

 h1 {
    font-size: 3rem;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
 }

 li {
    list-style-type: none;
    font-weight: bold;
    color: #333;
    font-size: 2rem;
     @media(min-width: 1200px){
        font-size: 2.7rem;
     }
 }

`

export default GlobalStyles
