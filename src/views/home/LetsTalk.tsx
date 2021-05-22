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
import useTranslation from 'next-translate/useTranslation'
import tw from 'twin.macro'

export const LetsTalk = () => {
  const [isFormOpen, { toggle, setTrue: openForm }] = useToggle()

  const { t, lang } = useTranslation('home')

  return (
    <>
      <StyledPhoneWrapper>
        <Phone tw="max-w-full mx-auto hidden sm:block" />

        <StyledContactWrapper>
          <div tw="relative w-full h-full p-6 flex flex-col">
            {isFormOpen ? (
              <SendMessage />
            ) : (
              <div tw="m-auto max-w-full text-center px-8 pb-16">
                <h2 tw="text-5xl">
                  {t`lets-talk.question`} <br />
                  <button
                    type="button"
                    tw="cursor-pointer text-7xl text-primary-400 mt-10 underline leading-tight"
                    css={[lang === 'es' && tw`text-3xl`]}
                    onClick={openForm}
                  >
                    {t`lets-talk.call-to-action`}
                  </button>
                </h2>
              </div>
            )}

            <button
              tw="mx-auto mt-auto hidden sm:block overflow-hidden rounded-full"
              type="button"
              onClick={toggle}
            >
              <Circle
                size={50}
                tw="text-black bg-white dark:text-white dark:bg-darkSecondary z-10 hover:(text-red-500)"
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
