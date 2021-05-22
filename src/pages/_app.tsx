import type { AppProps } from 'next/app'
import { GlobalStyles } from '@components/Layout/Global.styles'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
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
      <NextThemeProvider attribute="class" defaultTheme="dark">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextThemeProvider>
    </>
  )
}

export default App
