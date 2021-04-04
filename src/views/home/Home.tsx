import { Navbar } from '@components/Layout/Navbar'
import { Header } from './Header'
import { ArrowButton } from './ArrowButton'
import { FullScreen } from '@components/UI'
import { WhoAmI } from './WhoAmI'
import { Projects } from './Projects'
import { LetsTalk } from './LetsTalk'
import { Footer } from '@components/Layout/Footer'
import { IntroPresentation } from './IntroPresentation'
import { useState } from 'react'

export const HomeView = () => {
  const [finishedIntro, setFinishedIntro] = useState(false)
  const onCompletedIntro = () => setFinishedIntro(true)

  return (
    <>
      <FullScreen minScreen tw="z-20">
        <Navbar />
        <IntroPresentation onComplete={onCompletedIntro} />
        <Header startAnimation={finishedIntro} />
        <ArrowButton />
      </FullScreen>

      <div tw="pt-96"></div>

      <FullScreen minScreen>
        <WhoAmI />
      </FullScreen>

      <div tw="pt-96"></div>

      <FullScreen minScreen>
        <Projects />
      </FullScreen>

      <div tw="pt-96" />
      <div tw="pt-96" />

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
