import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    font-family: 'Verdana', 'Regular', 'Arial', 'Tahoma', 'Helvetica';
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  #app > .page {
    min-height: 100%;
    height: auto;
  }

  body, #app {
    height: 100%;
  }
`

export default GlobalStyle
