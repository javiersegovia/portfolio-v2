import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import tw from 'twin.macro'

import useTranslation from 'next-translate/useTranslation'

import { Container } from '@components/UI/Container'
import { ThemeButton } from '@components/Button/ThemeButton'
import { useAnimations } from './Navbar.hooks'
import { ChangeLanguage } from './ChangeLanguage'

import { sectionIds } from '@views/home/Home'

const NavItem = tw.li`text-center transition duration-100 hover:text-primary-400 text-lg font-mono lowercase`

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
        <div id="spacer" tw="pb-12 bg-white block sm:hidden" />,
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
      <div tw="md:hidden fixed top-0 flex justify-end items-center w-full z-40 bg-white dark:bg-black py-3 px-5 space-x-6">
        <ThemeButton />
        <ChangeLanguage />
      </div>

      <div tw="block md:hidden h-11" />

      <nav tw="w-full z-40 bg-white dark:bg-black fixed bottom-0 md:relative">
        <Container>
          <ul
            ref={ulRef}
            tw="flex items-center justify-center lg:justify-end py-3 text-lg space-x-4 md:pt-10 md:text-2xl md:space-x-16"
          >
            <NavItem>
              <a href={`#${sectionIds.whoAmI}`}>{t('about-me')}</a>
            </NavItem>
            <NavItem>
              <a href={`#${sectionIds.projects}`}>{t('my-work')}</a>
            </NavItem>
            {/* TODO: Uncomment when we have the blog */}
            {/* <NavItem>
                <Link href="/writing">
                  <a>{t('blog')}</a>
                </Link>
              </NavItem> */}
            <NavItem>
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
