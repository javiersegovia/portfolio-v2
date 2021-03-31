import { Container } from '@components/UI/Container'
import { Circle } from '@components/UI/Circle'
import { RecommendedPost } from '@components/Post/RecommendedPost'
import { Stroke } from '@components/UI/Stroke'
import { MainTitle } from './Header.styles'
import { useState } from 'react'
import { Modal } from '@components/UI/Modal'
import { SendMessage } from './SendMessage'

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const closeModal = () => setIsModalOpen(false)

  return (
    <header tw="my-auto">
      {/* todo: pull this Container to modify its custom maxWidth with emotion */}
      <Container tw="flex flex-col" smaller>
        <h3>
          <Stroke tw="text-8xl text-white">Hey!</Stroke>
        </h3>
        <MainTitle>
          I am <span tw="text-teal-500">Javier</span>
        </MainTitle>
        <p tw="w-full text-right ml-auto text-xl max-w-md mt-3">
          A developer who specializes in building <br /> exceptional (and fun!)
          experiences for the web
        </p>
      </Container>
      <Container tw="flex justify-between items-center">
        <Circle>
          <button
            tw="w-full h-full flex items-center justify-center flex-col z-10 cursor-pointer font-mono"
            onClick={() => setIsModalOpen(true)}
          >
            Want to talk? <br />
            <span tw="text-teal-500 font-bold">Send me a message</span>
          </button>
        </Circle>

        {isModalOpen && (
          <Modal onRequestClose={closeModal}>
            {({ ref }) => <SendMessage ref={ref} />}
          </Modal>
        )}

        <div tw="text-right">
          <p tw="text-teal-500 font-bold text-lg mb-3">
            ... and I like to write too. My last content:
          </p>
          <RecommendedPost />
        </div>
      </Container>
    </header>
  )
}
