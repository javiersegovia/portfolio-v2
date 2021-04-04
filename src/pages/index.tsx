import Head from 'next/head'
import { HomeView } from '@views/home'

const IndexPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Javier Segovia</title>
      </Head>
      <HomeView />
    </>
  )
}

export default IndexPage
