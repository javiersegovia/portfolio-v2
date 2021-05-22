import { Navbar } from '@components/Layout/Navbar'
import { Footer } from '@components/Layout/Footer'
import { FullScreen } from '@components/UI'
import { useToggle } from '@lib/hooks/useToggle'

import { Header } from './Header'
import { IntroPresentation } from './IntroPresentation'
import { WhoAmI } from './WhoAmI'
import { Projects } from './Projects'
import { LetsTalk } from './LetsTalk'
import { MovieBG } from './Home.styles'

export const sectionIds = {
  whoAmI: 'WHO_AM_I',
  projects: 'PROJECTS',
  letsTalk: 'LETS_TALK',
  footer: 'FOOTER',
}

export const HomeView = () => {
  const [introIsFinished, { setTrue }] = useToggle(false)

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

      <div tw="pt-20 md:pt-96 hidden sm:block" />

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
