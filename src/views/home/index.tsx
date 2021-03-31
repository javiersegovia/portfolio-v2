import { Navbar } from '@components/Layout/Navbar'
import { Header } from './Header'
import { ArrowButton } from './ArrowButton'
import { FullScreen } from '@components/UI'
import { WhoAmI } from './WhoAmI'
import { RecentWork } from './RecentWork'
import { Writing } from './Writing'
import { LetsTalk } from './LetsTalk'
import { Footer } from '@components/Layout/Footer'

export const HomeView = () => {
  return (
    <>
      <FullScreen>
        <Navbar />
        <Header />
        <ArrowButton />
      </FullScreen>

      <div tw="pt-96"></div>

      <FullScreen>
        <WhoAmI />
      </FullScreen>

      <div tw="pt-96"></div>

      <FullScreen minScreen>
        <RecentWork />
      </FullScreen>

      <div tw="pt-96" />
      <div tw="pt-96" />

      <FullScreen minScreen>
        <Writing limit={4} />
      </FullScreen>

      <div tw="pt-96" />

      <FullScreen>
        <LetsTalk />
      </FullScreen>

      <div tw="pt-1" />

      <Footer />
    </>
  )
}
