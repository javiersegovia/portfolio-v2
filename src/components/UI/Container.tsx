import React from 'react'
import _tw, { styled } from 'twin.macro'
import { up } from 'styled-breakpoints'

interface ContainerProps {
  children: React.ReactNode
  smaller?: boolean
}

const StyledContainer = styled.section<ContainerProps>`
  max-width: 100%;

  ${up('sm')} {
    max-width: 90%;
  }
  ${up('md')} {
    max-width: 1024px;

    ${(props) =>
      props.smaller &&
      `
      max-width: 900px;
    `}
  }

  ${_tw`px-7 sm:px-4 mx-auto`}
`

export const Container = ({ children, ...otherProps }: ContainerProps) => {
  return <StyledContainer {...otherProps}>{children}</StyledContainer>
}
