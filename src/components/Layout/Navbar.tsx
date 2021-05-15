import ReactDOM from 'react-dom'
import tw from 'twin.macro'
import { Container } from '../UI/Container'
import { useAnimations } from './Navbar.hooks'
import { ThemeButton } from '@components/Button/ThemeButton'
import { useEffect, useState } from 'react'

const NavItem = tw.li`text-center transition duration-100 hover:text-teal-500 font-sans`

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
        <div id="spacer" tw="pb-16 bg-red-500 block sm:hidden" />,
        container
      )
    : null
}

export const Navbar = ({ startAnimation = false }) => {
  const { ulRef } = useAnimations({
    paused: !startAnimation,
    delay: 1.5,
  })

  return (
    <>
      <nav tw="w-full z-40 bg-white dark:bg-black fixed bottom-0 md:relative">
        <Container>
          <ul
            ref={ulRef}
            tw="flex items-center justify-center lg:justify-end pt-5 pb-5 text-lg space-x-4 md:pt-10 md:text-2xl md:space-x-16"
          >
            <NavItem>
              <a href="#">about me</a>
            </NavItem>
            <NavItem>
              <a href="#">my work</a>
            </NavItem>
            {/* TODO: Uncomment when we have the blog */}
            {/* <NavItem>
                <Link href="/writing">
                  <a>blog</a>
                </Link>
              </NavItem> */}
            <NavItem>
              <a href="#">get in touch</a>
            </NavItem>
            <ThemeButton />
          </ul>
        </Container>
      </nav>

      <BottomSpacer />
    </>
  )
}
