import tw from 'twin.macro'
import { Portal } from 'react-portal'
import { Container } from '../UI/Container'

const NavItem = tw.li`text-center transition duration-100 hover:text-teal-500 font-sans`

export const Navbar = () => {
  return (
    <>
      <nav tw="w-full z-40 bg-white fixed bottom-0 md:relative">
        <Container>
          <ul tw="flex items-center justify-center lg:justify-end pt-5 pb-5 text-lg space-x-4 md:pt-10 md:text-2xl md:space-x-16">
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
          </ul>
        </Container>
      </nav>
      <Portal>
        <div tw="pb-20 bg-white block md:hidden"></div>
      </Portal>
    </>
  )
}
