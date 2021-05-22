import Head from 'next/head'
import { HomeView } from '@views/home'
import useTranslation from 'next-translate/useTranslation'

const IndexPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.png" />
        <title>{t`title`}</title>
      </Head>
      <HomeView />
    </>
  )
}

export default IndexPage
