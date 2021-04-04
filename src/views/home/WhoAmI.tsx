import { GuyWithMonitor } from '@components/SVG'
import { Title, Container, Stroke } from '@components/UI'
import { TechnologiesSlider } from './TechnologiesSlider'

export const WhoAmI = () => {
  return (
    <>
      <Container tw="relative w-full h-auto flex flex-row items-center justify-center space-x-5 px-8 xl:px-0">
        <div tw="mt-72 sm:mt-60 bg-white z-10 border-teal-500 border-2 rounded-lg py-10 max-w-lg px-10 md:px-8 lg:(mt-0 bg-transparent border-none) lg:max-w-full">
          <Title tw="text-center lg:text-left">
            <Stroke tw="text-white">So,</Stroke>{' '}
            <span tw="text-teal-500">who am I?</span>
          </Title>
          <article tw="ml-0 text-sm lg:text-base lg:leading-8 mt-5 space-y-4 xl:ml-14 text-justify">
            <p>
              Javier Segovia. A developer of 24 years old based in Venezuela.
            </p>
            <p>
              Back in 2016, I started my career as a developer without even
              realizing it. I tried to build a web page with basic HTML, CSS and
              Javascript just as a hobby. I found out that programming was
              actually fun. So I kept learning, practicing, and hacking things.
            </p>
            <p>
              Since then, I’ve had diverse experiences in the development world:
              from working with multiple clients as an indie freelancer, to be
              part of a whole team of amazing developers following an agile
              methodology.
            </p>
          </article>
        </div>

        <div>
          <GuyWithMonitor tw="absolute top-0 left-0 right-0 mx-auto lg:relative width[330px] sm:width[auto]" />
        </div>
      </Container>

      <Container tw="relative mt-10 z-10 bg-white w-full h-full flex items-center flex-col text-center">
        <p>Today, these are some of the tools that I have experience with:</p>
        <div tw="mt-5">
          <TechnologiesSlider />
        </div>
      </Container>
    </>
  )
}
