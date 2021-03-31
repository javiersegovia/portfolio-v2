import { GuyWithMonitor } from '@components/SVG'
import { Container } from '../../components/UI/Container'
import { Stroke } from '../../components/UI/Stroke'
import { TechnologiesSlider } from './TechnologiesSlider'

export const WhoAmI = () => {
  return (
    <>
      <Container tw="w-full h-auto flex flex-row items-center justify-center space-x-5">
        <div>
          <h2 tw="text-7xl">
            <Stroke tw="text-white">So,</Stroke>{' '}
            <span tw="text-teal-500">who am I?</span>
          </h2>
          <article tw="ml-14 text-base leading-8 mt-5 space-y-4">
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
          <GuyWithMonitor />
        </div>
      </Container>
      <Container tw="mt-10">
        <p>Today, these are some of the tools that I have experience with:</p>
        <div tw="mt-5">
          <TechnologiesSlider />
        </div>
      </Container>
    </>
  )
}
