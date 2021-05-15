import type { AppProps } from 'next/app'
import { GlobalStyles } from '@components/Layout/Global.styles'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { ThemeProvider } from '@emotion/react'
import defaultTheme from 'tailwindcss/defaultTheme'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import '@styles/main.css'
import '@styles/slick.css'
import '@styles/slick-theme.css'

const theme = {
  breakpoints: {
    ...defaultTheme.screens,
  },
}

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextThemeProvider attribute="class">
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </NextThemeProvider>
    </>
  )
}

export default App
