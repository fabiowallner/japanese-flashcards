import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
  fontFamily: `'Inter', sans-serif`
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.fontFamily};
  }

  #__next {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp