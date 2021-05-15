import { Container } from '@components/UI/Container'
import { Stroke } from '@components/UI/Stroke'
import { Modal } from '@components/Modal'
import { SendMessage } from './SendMessage'
import { useToggle } from '@lib/hooks/useToggle'
import { Circle } from '@components/UI'
import { useAnimations } from './Header.hooks'
import useTranslation from 'next-translate/useTranslation'

interface HeaderProps {
  startAnimation?: boolean
}

export const Header = ({ startAnimation = false }: HeaderProps) => {
  const [
    isModalOpen,
    { setTrue: openModal, setFalse: closeModal },
  ] = useToggle()

  const { h3Ref, h1Ref, descriptionRef } = useAnimations({
    paused: !startAnimation,
  })

  const { t } = useTranslation('home')

  return (
    <header tw="my-auto">
      <Container tw="flex flex-col" smaller>
        <h3 ref={h3Ref} tw="text-center md:text-left px-20 lg:px-0">
          <Stroke tw="text-5xl md:text-7xl lg:text-8xl text-white dark:text-black">
            {t`header.hello`}
          </Stroke>
        </h3>
        <h1
          ref={h1Ref}
          tw="mx-auto text-7xl md:text-9xl lg:text-10xl text-center"
        >
          {t`header.i-am`}
          <span tw="text-teal-500"> Javier</span>
        </h1>
        <p
          ref={descriptionRef}
          tw="w-full max-w-md mt-3 mx-auto text-center text-base md:text-xl lg:(mx-0 ml-auto text-right)"
        >
          {t`header.subtitle`}
        </p>
      </Container>

      <Container tw="flex justify-center mt-20 lg:mt-0 lg:justify-between items-center">
        <Circle withAnimation paused={!startAnimation}>
          <button
            type="button"
            tw="w-full h-full flex items-center justify-center flex-col z-10 cursor-pointer font-mono text-sm sm:text-base md:text-lg lg:text-xl"
            onClick={openModal}
          >
            {t`header.question`} <br />
            <span tw="text-teal-500 font-bold">{t`header.contact-me`}</span>
          </button>
        </Circle>

        {isModalOpen && (
          <Modal withOverlay onRequestClose={closeModal}>
            {({ ref }) => (
              <div
                ref={ref}
                tw="bg-white dark:bg-black relative m-auto rounded-md px-10 py-12 max-w-full sm:h-auto sm:max-w-md w-full h-full"
              >
                <SendMessage onRequestClose={closeModal} />
              </div>
            )}
          </Modal>
        )}

        {/* 
          TODO: uncomment when blog is ready

          <div tw="text-right">
            <p tw="text-teal-500 font-bold text-lg mb-3">
              ... and I like to write too. My last content:
            </p>
            <RecommendedPost />
          </div> 
        */}
      </Container>
    </header>
  )
}
