import type { AppProps } from 'next/app'
import { GlobalStyles } from '@components/Layout/GlobalStyles'

import { ThemeProvider } from '@emotion/react'
import defaultTheme from 'tailwindcss/defaultTheme'

import '@styles/main.css'
import '@styles/slick.css'
import '@styles/slick-theme.css'

const theme = {
  breakpoints: {
    ...defaultTheme.screens,
  },
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
