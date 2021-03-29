import _tw, { styled } from 'twin.macro'
import { Phone } from '@components/SVG'
import { GuyOnWall } from '../../components/SVG/GuyOnWall'

const StyledPhoneWrapper = styled.div`
  max-width: 386px;

  ${_tw`absolute mt-auto mx-auto bottom-0 left-0 right-0`}
`

const StyledText = styled.div`
  max-width: 260px;

  ${_tw`m-auto text-center text-8xl z-10`}
`

const StyledGuy = styled.div`
  margin-left: 178px;

  ${_tw`absolute bottom-0 left-1/2 -mb-4`}
`

export const LetsTalk = () => {
  return (
    <>
      <StyledPhoneWrapper>
        <Phone />
      </StyledPhoneWrapper>
      <StyledGuy>
        <GuyOnWall />
      </StyledGuy>
      <StyledText>
        <h2 tw="text-5xl">
          Got an idea? <br />
          <button
            type="button"
            tw="cursor-pointer text-7xl text-teal-500 mt-10 underline leading-tight"
          >
            Let&apos;s talk
          </button>
        </h2>
      </StyledText>
      <div tw="border-t-4 border-double border-black"></div>
      <div tw="border-t-4 border-double border-black -mb-2"></div>
    </>
  )
}
