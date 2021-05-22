import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import tw from 'twin.macro'

import useTranslation from 'next-translate/useTranslation'
import { GiAstronautHelmet, GiMagickTrick, GiPaperPlane } from 'react-icons/gi'

import { Container } from '@components/UI/Container'
import { ThemeButton } from '@components/Button/ThemeButton'
import { useAnimations } from './Navbar.hooks'
import { ChangeLanguage } from './ChangeLanguage'

import { sectionIds } from '@views/home/Home'

const NavItem = tw.li`w-full md:w-auto flex flex-col justify-center items-center text-center transition duration-100 dark:hover:text-primary-400 hover:text-primary-400 text-sm sm:text-base md:text-lg font-mono dark:text-white text-black px-3 sm:px-4 md:px-0`

const BottomSpacer = () => {
  const [container, setContainer] = useState<HTMLDivElement>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const rootContainer = document.createElement('div')
      const parentElem = document.querySelector('#__next')
      parentElem?.appendChild(rootContainer)

      setContainer(rootContainer)
    }
  }, [])

  return container
    ? ReactDOM.createPortal(
        <div id="spacer" tw="pb-12 bg-primary-400 block md:hidden" />,
        container
      )
    : null
}

export const Navbar = ({ startAnimation = false }) => {
  const { ulRef } = useAnimations({
    paused: !startAnimation,
  })

  const { t } = useTranslation('common')

  return (
    <>
      <div tw="md:hidden fixed top-0 flex justify-end items-center w-full z-40 bg-white dark:bg-darkSecondary py-3 px-5 space-x-6">
        <ThemeButton />
        <ChangeLanguage />
      </div>

      <div tw="block md:hidden h-11" />

      <nav tw="w-full z-40 p-3 md:p-0 bg-transparent md:bg-white md:dark:bg-darkSecondary fixed bottom-0 rounded-xl md:rounded-none md:relative">
        <Container tw="sm:max-width[none] md:max-width[1024px] rounded-xl bg-gray-50 border-gray-100 border shadow-xl dark:border-none md:shadow-none dark:bg-gray-900 dark:md:bg-transparent md:bg-transparent w-full">
          <ul
            ref={ulRef}
            tw="flex items-center justify-around md:justify-center lg:justify-end py-3 text-lg divide-x divide-black dark:divide-white divide-opacity-20 md:divide-none md:pt-10 md:text-2xl md:space-x-16"
          >
            <NavItem>
              <GiAstronautHelmet tw="text-2xl block md:hidden" />
              <a href={`#${sectionIds.whoAmI}`}>{t('about-me')}</a>
            </NavItem>
            <NavItem>
              <GiMagickTrick tw="text-2xl block md:hidden" />
              <a href={`#${sectionIds.projects}`}>{t('my-work')}</a>
            </NavItem>
            {/* TODO: Uncomment when we have the blog */}
            {/* <NavItem>
                <Link href="/writing">
                <a>{t('blog')}</a>
                </Link>
              </NavItem> */}
            <NavItem>
              <GiPaperPlane tw="text-2xl block md:hidden" />
              <a href={`#${sectionIds.footer}`}>{t('get-in-touch')}</a>
            </NavItem>

            <ThemeButton tw="hidden md:block" />
            <ChangeLanguage tw="hidden md:block" />
          </ul>
        </Container>
      </nav>

      <BottomSpacer />
    </>
  )
}
