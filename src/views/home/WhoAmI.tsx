import { GuyWithMonitor } from '@components/SVG'
import { Title, Container } from '@components/UI'

import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import { styled } from 'twin.macro'

const IMAGE_WIDTH = 40
const IMAGE_HEIGHT = 40

/**
 * Here we match the id with the keys generated from the imagePaths
 * and target the icons that have black lines so we switch them
 * to white when we are in dark theme
 */

const StyledImageWrapper = styled.div`
  .dark & {
    #icon_nextjs,
    #icon_apollo,
    #icon_prisma {
      filter: invert(1);
    }
  }
`

const imagePaths = {
  react: '/svg/icon-react.svg',
  graphql: '/svg/icon-graphql.svg',
  docker: '/svg/icon-docker.svg',
  nextjs: '/svg/icon-nextjs.svg',
  nestjs: '/svg/icon-nestjs.svg',
  nodejs: '/svg/icon-nodejs.svg',
  ruby: '/svg/icon-ruby.svg',
  rails: '/svg/icon-rails.svg',
  reactquery: '/svg/icon-reactquery.svg',
  redux: '/svg/icon-redux.svg',
  apollo: '/svg/icon-apollo.svg',
  prisma: '/svg/icon-prisma.svg',
  postgresql: '/svg/icon-postgresql.svg',
}

const getAge = () => {
  const birthDate = new Date(1996, 10, 29)
  const ageDiffMs = Date.now() - birthDate.getTime()
  const ageDate = new Date(ageDiffMs)

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export const WhoAmI = () => {
  const { t } = useTranslation('home')

  return (
    <>
      <Container tw="relative w-full h-auto flex flex-row items-center justify-center space-x-5 px-8 xl:px-0">
        <div tw="mt-72 sm:mt-60 bg-white dark:bg-black z-10 border-primary-400 border-2 rounded-lg py-10 max-w-lg px-10 md:px-8 lg:(mt-0 bg-transparent border-none)">
          <Title tw="text-center lg:text-left">
            <Trans
              i18nKey="home:who-am-i.title"
              components={[<span key="bold" tw="text-primary-400" />]}
            />
          </Title>
          <article tw="ml-0 text-sm lg:text-base leading-6 lg:leading-8 mt-5 space-y-4 xl:ml-14 text-justify">
            <p>{t('who-am-i.content-1', { age: getAge() })}</p>
            <p>{t`who-am-i.content-2`}</p>
            <p>{t`who-am-i.content-3`}</p>
            <p>{t`who-am-i.content-4`}</p>
            <StyledImageWrapper tw="dark:opacity-70 flex flex-wrap justify-center sm:justify-start">
              {(Object.keys(imagePaths) as Array<keyof typeof imagePaths>).map(
                (key) => (
                  <img
                    key={key}
                    src={imagePaths[key]}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    className="flex-grow-0 w-10 h-10 mr-3 mt-3"
                    alt={key}
                    id={`icon_${key}`}
                  />
                )
              )}
            </StyledImageWrapper>
          </article>
        </div>

        <GuyWithMonitor tw="absolute top-0 left-0 right-0 mx-auto lg:relative width[330px] sm:width[auto]" />
      </Container>
    </>
  )
}
