import { Circle } from '@components/UI'
import tw, { css, styled } from 'twin.macro'
import { down } from 'styled-breakpoints'

export const StyledPhoneWrapper = styled.div`
  width: 386px;

  ${down('sm')} {
    ${tw`w-full`}
  }

  ${tw`absolute mt-auto mx-auto bottom-0 left-0 right-0`}
`

export const StyledContactWrapper = styled.div`
  width: 320px;
  height: 685px;

  ${tw`z-10 flex max-w-full relative sm:absolute mx-auto mt-auto mb-20 top-16 left-0 right-0`}
`

export const StyledGuy = styled.div`
  margin-left: 178px;

  ${tw`absolute bottom-0 left-1/2 -mb-4`}
`

export const CustomCircle = styled(Circle)`
  width: 220px;

  ${down('md')} {
    width: 160px;
    height: 160px;
  }
`
