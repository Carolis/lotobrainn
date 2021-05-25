import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }

 html {
     font-size: 62.5%;
 }

 body {
     font-family: 'Montserrat', sans-serif;
     background-color: ${(props) => props.theme.colors.primary}
 }
`

export default GlobalStyles
