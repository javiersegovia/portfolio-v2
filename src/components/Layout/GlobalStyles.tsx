import _tw, { GlobalStyles as BaseStyles } from 'twin.macro'
import { Global, css } from '@emotion/react'

const customStyles = css`
  *:focus,
  button:focus {
    ${_tw`outline-none!`}
  }

  body {
    padding-right: 15px;

    ${_tw`w-full h-full`}
  }

  body,
  p {
    ${_tw`font-mono`}
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
`

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)
