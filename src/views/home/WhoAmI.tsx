import { GuyWithMonitor } from '@components/SVG'
import { Title, Container, Stroke } from '@components/UI'

import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import { Fragment } from 'react'
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

export const WhoAmI = () => {
  const { t } = useTranslation('home')

  return (
    <>
      <Container tw="relative w-full h-auto flex flex-row items-center justify-center space-x-5 px-8 xl:px-0">
        <div tw="mt-72 sm:mt-60 bg-white dark:bg-black z-10 border-teal-500 border-2 rounded-lg py-10 max-w-lg px-10 md:px-8 lg:(mt-0 bg-transparent border-none)">
          <Title tw="text-center lg:text-left">
            {/* {t`who-am-i.title`} */}
            <Trans
              i18nKey="home:who-am-i.title"
              components={[<span key="bold" tw="text-teal-500" />]}
            />
            {/* <Stroke tw="text-white">So,</Stroke>{' '}
            <span tw="text-teal-500">who am I?</span> */}
          </Title>
          <article tw="ml-0 text-sm lg:text-base leading-6 lg:leading-8 mt-5 space-y-4 xl:ml-14 text-justify">
            <p>
              {t`who-am-i.content-1`}
              {/* Javier Segovia. A developer of 24 years old based in Venezuela. */}
            </p>
            <p>
              {t`who-am-i.content-2`}
              {/* Back in 2016, I started my career as a developer without even
              realizing it. I tried to build a web page with basic HTML, CSS and
              Javascript just as a hobby. I found out that programming was
              actually fun. So I kept learning, practicing, and hacking things. */}
            </p>
            <p>
              {t`who-am-i.content-3`}
              {/* Since then, I’ve had diverse experiences in the development world: */}
              {/* from working with multiple clients as an indie freelancer, to be */}
              {/* part of a whole team of amazing developers following an agile */}
              {/* methodology. */}
            </p>
            <p>
              {t`who-am-i.content-4`}
              {/* Today, these are some of the tools that I have experience with: */}
            </p>
            <StyledImageWrapper tw="dark:opacity-70 flex flex-wrap justify-center sm:justify-start">
              {(Object.keys(imagePaths) as Array<keyof typeof imagePaths>).map(
                (key) => (
                  <img
                    key={key}
                    src={imagePaths[key]}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    className="flex-grow-0 w-10 h-10 mr-3 mt-3"
                    alt="Icon"
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
