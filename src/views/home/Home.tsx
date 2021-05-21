import tw, { styled } from 'twin.macro'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import { FullScreen } from '@components/UI'
import { useToggle } from '@lib/hooks/useToggle'

import { Header } from './Header'
import { IntroPresentation } from './IntroPresentation'
import { WhoAmI } from './WhoAmI'
import { Projects } from './Projects'
import { LetsTalk } from './LetsTalk'

const MovieBG = styled.div`
  background-image: url('/img/movie.png');
  animation: movie 1s steps(4) infinite;
  height: 200%;
  left: -50%;
  top: -50%;
  width: 200%;

  ${tw`opacity-70 fixed pointer-events-none z-50`}

  @keyframes movie {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    10% {
      -webkit-transform: translate(-5%, -5%);
      transform: translate(-5%, -5%);
    }
    20% {
      -webkit-transform: translate(-10%, 5%);
      transform: translate(-10%, 5%);
    }
    30% {
      -webkit-transform: translate(5%, -10%);
      transform: translate(5%, -10%);
    }
    40% {
      -webkit-transform: translate(-5%, 15%);
      transform: translate(-5%, 15%);
    }
    50% {
      -webkit-transform: translate(-10%, 5%);
      transform: translate(-10%, 5%);
    }
    60% {
      -webkit-transform: translate(15%, 0);
      transform: translate(15%, 0);
    }
    70% {
      -webkit-transform: translate(0, 10%);
      transform: translate(0, 10%);
    }
    80% {
      -webkit-transform: translate(-15%, 0);
      transform: translate(-15%, 0);
    }
    90% {
      -webkit-transform: translate(10%, 5%);
      transform: translate(10%, 5%);
    }
    to {
      -webkit-transform: translate(5%, 0);
      transform: translate(5%, 0);
    }
  }
`

export const sectionIds = {
  whoAmI: 'WHO_AM_I',
  projects: 'PROJECTS',
  letsTalk: 'LETS_TALK',
  footer: 'FOOTER',
}

export const HomeView = () => {
  const [introIsFinished, { setTrue }] = useToggle(true)

  return (
    <>
      <MovieBG />

      <FullScreen minScreen tw="z-20">
        <Navbar startAnimation={introIsFinished} />
        {!introIsFinished && <IntroPresentation onComplete={setTrue} />}
        <Header startAnimation={introIsFinished} />
      </FullScreen>

      <div tw="pt-10 md:pt-96"></div>

      <FullScreen
        minScreen
        id={sectionIds.whoAmI}
        tw="items-center justify-center"
      >
        <WhoAmI />
      </FullScreen>

      <div tw="pt-40 md:pt-96"></div>

      <FullScreen minScreen id={sectionIds.projects}>
        <Projects />
      </FullScreen>

      <div tw="pt-20 md:pt-96" />
      {/* <div tw="pt-96 hidden sm:block" /> */}

      <FullScreen minScreen id={sectionIds.letsTalk}>
        <LetsTalk />
      </FullScreen>

      <div tw="pt-1" />

      <Footer id={sectionIds.footer} />
    </>
  )
}

{
  /* 
        TODO: Uncomment when blog is ready

        <FullScreen minScreen>
          <Writing limit={4} />
        </FullScreen>

        <div tw="pt-96" /> 
      */
}
