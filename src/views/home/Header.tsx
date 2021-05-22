import useTranslation from 'next-translate/useTranslation'

import { useToggle } from '@lib/hooks/useToggle'
import { Container } from '@components/UI/Container'
import { Stroke } from '@components/UI/Stroke'
import { Modal } from '@components/Modal'
import { Circle } from '@components/UI'
import { sectionIds } from '@views/home/Home'

import { SendMessage } from './SendMessage'
import { useAnimations } from './Header.hooks'
import { ArrowButton } from './ArrowButton'

interface HeaderProps {
  startAnimation?: boolean
}

export const Header = ({ startAnimation = false }: HeaderProps) => {
  const [isModalOpen, { setTrue: openModal, setFalse: closeModal }] =
    useToggle()

  const { h3Ref, h1Ref, descriptionRef, arrowRef } = useAnimations({
    paused: !startAnimation,
  })

  const { t } = useTranslation('home')

  return (
    <header tw="my-auto">
      <Container tw="flex flex-col" smaller>
        <h3 ref={h3Ref} tw="text-center lg:text-left px-20 lg:px-0">
          <Stroke tw="text-xl sm:text-2xl md:text-3xl italic text-white dark:text-black">
            {t`header.hello`}
          </Stroke>
        </h3>
        <h1
          ref={h1Ref}
          tw="mt-4 md:mt-5 lg:mt-7 mx-auto text-7xl md:text-9xl lg:text-9xl text-center"
        >
          {t`header.i-am`}
          <span tw="text-primary-400"> Javier</span>
        </h1>
        <p
          ref={descriptionRef}
          tw="w-full max-w-md mt-10 mx-auto text-center text-base md:text-xl lg:(mx-0 ml-auto text-right)"
        >
          {t`header.subtitle`}
        </p>
      </Container>

      <Container tw="flex justify-center mt-0 md:mt-20 lg:mt-0 lg:justify-between items-center">
        <button
          type="button"
          tw="flex italic justify-center flex-col z-10 cursor-pointer font-mono text-lg lg:text-xl"
          onClick={openModal}
        >
          <Circle
            withAnimation
            paused={!startAnimation}
            svgProps={{
              className: 'hidden md:block',
            }}
          >
            <span tw="italic px-4 py-3 font-sans rounded-lg underline bg-primary-400 text-black text-2xl md:bg-transparent md:p-0 dark:md:font-bold dark:md:text-primary-400 md:text-3xl">{t`header.contact-me`}</span>
            {/* <span tw="text-black px-4 py-3 rounded-md bg-primary-400 font-bold font-sans text-2xl ">{t`header.contact-me`}</span> */}
          </Circle>
        </button>

        {isModalOpen && (
          <Modal withOverlay onRequestClose={closeModal}>
            {({ ref }) => (
              <div
                ref={ref}
                tw="bg-white dark:bg-darkSecondary relative m-auto rounded-md px-10 py-12 max-w-full sm:h-auto sm:max-w-md w-full h-full"
              >
                <SendMessage onRequestClose={closeModal} />
              </div>
            )}
          </Modal>
        )}

        {/* 
          TODO: uncomment when blog is ready

          <div tw="text-right">
            <p tw="text-primary-400 font-bold text-lg mb-3">
              ... and I like to write too. My last content:
            </p>
            <RecommendedPost />
          </div> 
        */}
      </Container>
      <ArrowButton ref={arrowRef} href={`#${sectionIds.whoAmI}`} />
    </header>
  )
}
