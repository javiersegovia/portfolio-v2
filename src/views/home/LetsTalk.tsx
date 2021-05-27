import { Button } from '@components/Button'
import { Phone } from '@components/SVG'
import { GuyOnWall } from '@components/SVG/GuyOnWall'
import { Circle } from '@components/UI'
import { SendMessage } from './SendMessage'
import { RiSendPlaneFill } from 'react-icons/ri'
import {
  StyledContactWrapper,
  StyledGuy,
  StyledPhoneWrapper,
} from './Home.styles'

export const LetsTalk = () => {
  return (
    <>
      <StyledPhoneWrapper>
        <Phone tw="max-w-full mx-auto hidden sm:block" />

        <StyledContactWrapper>
          <div tw="relative w-full h-full p-6 flex flex-col">
            <SendMessage
              submitButton={({ isLoading }) => (
                <>
                  <div tw="pt-5" />
                  <Button
                    tw="mx-auto overflow-hidden rounded-full"
                    type="submit"
                    isLoading={isLoading}
                    showCheckOnSuccess
                    isFab
                  >
                    <Circle
                      size={50}
                      tw="text-black bg-white dark:text-white dark:bg-darkSecondary z-10 hover:text-primary-500"
                    >
                      <RiSendPlaneFill tw="m-auto text-2xl" />
                    </Circle>
                  </Button>
                </>
              )}
            />
          </div>
        </StyledContactWrapper>
      </StyledPhoneWrapper>

      <StyledGuy tw="hidden lg:block">
        <GuyOnWall />
      </StyledGuy>

      <div>
        <div tw="border-t-4 border-double border-black"></div>
        <div tw="mt-auto border-t-4 border-double border-black -mb-2"></div>
      </div>
    </>
  )
}
