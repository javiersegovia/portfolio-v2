import { useToggle } from '@lib/hooks/useToggle'
import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import { FullScreen } from '@components/UI'
import { Header } from './Header'
import { IntroPresentation } from './IntroPresentation'
import { WhoAmI } from './WhoAmI'
import { Projects } from './Projects'
import { LetsTalk } from './LetsTalk'
import { ArrowButton } from './ArrowButton'

export const HomeView = () => {
  const [introIsFinished, { setTrue }] = useToggle(false)

  return (
    <>
      <FullScreen minScreen tw="z-20">
        <Navbar startAnimation={introIsFinished} />
        {!introIsFinished && <IntroPresentation onComplete={setTrue} />}
        <Header startAnimation={introIsFinished} />
        <ArrowButton />
      </FullScreen>

      <div tw="pt-10 md:pt-96"></div>

      <FullScreen minScreen>
        <WhoAmI />
      </FullScreen>

      <div tw="pt-40 md:pt-96"></div>

      <FullScreen minScreen>
        <Projects />
      </FullScreen>

      <div tw="pt-20 md:pt-96" />
      {/* <div tw="pt-96 hidden sm:block" /> */}

      <FullScreen minScreen>
        <LetsTalk />
      </FullScreen>

      <div tw="pt-1" />

      <Footer />
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
