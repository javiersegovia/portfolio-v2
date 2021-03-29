import Link from 'next/link'
import _tw from 'twin.macro'
import { Container } from '../UI/Container'

const NavItem = _tw.li`transition duration-100 hover:text-teal-500 font-sans`

export const Navbar = () => {
  return (
    <nav tw="w-full z-30 bg-white">
      <Container>
        <ul tw="flex items-center justify-end space-x-16 pt-10 pb-5 text-2xl">
          <NavItem>
            <a href="#">my work</a>
          </NavItem>
          <NavItem>
            <Link href="/writing">
              <a>blog</a>
            </Link>
          </NavItem>
          <NavItem>
            <a href="#">contact me</a>
          </NavItem>
        </ul>
      </Container>
    </nav>
  )
}
