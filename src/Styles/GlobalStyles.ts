import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scrollbar-width: thin;
    scrollbar-color: rgba(158, 146, 238, 0.72) rgba(241, 241, 241, 0.72);
  }
  
`
export default GlobalStyle;
