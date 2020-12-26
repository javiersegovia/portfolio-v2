import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h1`
  font-weight: bold;
  color: black;
`

const Button = styled.button`
  color: black;
  margin-top: 1.875rem;
`

export default function Home() {
  return (
    <>
      <Title className="text-center text-4xl">NextJS Starter Project</Title>
      <Link href="/products">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Product page
        </Button>
      </Link>
    </>
  )
}
