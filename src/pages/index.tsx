import Head from 'next/head'
import _tw from 'twin.macro'
import { HomeView } from '@views/home'

const IndexPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Javier Segovia | Web Developer</title>
      </Head>
      <HomeView />
    </>
  )
}

export default IndexPage
