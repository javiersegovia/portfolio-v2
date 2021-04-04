import { Phone } from '@components/SVG'
import { GuyOnWall } from '../../components/SVG/GuyOnWall'
import { useToggle } from '@lib/hooks/useToggle'
import { SendMessage } from './SendMessage'
import { Circle } from '@components/UI'
import { RiCloseFill } from 'react-icons/ri'
import {
  StyledContactWrapper,
  StyledGuy,
  StyledPhoneWrapper,
} from './Home.styles'

export const LetsTalk = () => {
  const [isFormOpen, { toggle, setTrue: openForm }] = useToggle()

  return (
    <>
      <StyledPhoneWrapper>
        <Phone tw="max-w-full mx-auto" />

        <StyledContactWrapper>
          <div tw="relative w-full h-full p-6 flex flex-col">
            {isFormOpen ? (
              <SendMessage />
            ) : (
              <div tw="m-auto text-center px-8 pb-16">
                <h2 tw="text-5xl">
                  Got an idea? <br />
                  <button
                    type="button"
                    tw="cursor-pointer text-7xl text-teal-500 mt-10 underline leading-tight"
                    onClick={openForm}
                  >
                    Let&apos;s talk
                  </button>
                </h2>
              </div>
            )}

            <button tw="block mx-auto mt-auto" type="button" onClick={toggle}>
              <Circle
                size={50}
                tw="text-black bg-white z-10 hover:(bg-teal-500 text-white)"
              >
                {isFormOpen && <RiCloseFill tw="m-auto text-2xl" />}
              </Circle>
            </button>
          </div>
        </StyledContactWrapper>
      </StyledPhoneWrapper>

      <StyledGuy tw="hidden lg:block">
        <GuyOnWall />
      </StyledGuy>

      <div tw="mt-auto">
        <div tw="border-t-4 border-double border-black"></div>
        <div tw="mt-auto border-t-4 border-double border-black -mb-2"></div>
      </div>
    </>
  )
}
