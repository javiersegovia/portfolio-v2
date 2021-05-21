import _tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro'
import { Global, css } from '@emotion/react'

const customStyles = css`
  html {
    scroll-behavior: smooth;
  }

  *:focus,
  button:focus {
    ${_tw`outline-none!`}
  }

  body {
    ${_tw`w-full h-full`}
  }

  body,
  p {
    ${_tw`font-mono`}
  }

  .dark body {
    ${_tw`bg-black`}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${_tw`font-sans`}
  }

  a {
    cursor: pointer;
  }

  .svgElement {
    fill: #fff;
  }

  .dark & {
    .svgElement {
      fill: ${theme`colors.black`};
    }
  }
`

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)
