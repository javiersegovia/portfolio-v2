import { FullScreen } from '@components/UI'
import { useIntroAnimations } from './IntroPresentation.hooks'

const words = [
  'innovation',
  'minimalism',
  'creativity',
  'technology',
  'improvement',
]

interface IntroPresentationProps {
  onComplete: () => void
}

export const IntroPresentation = ({ onComplete }: IntroPresentationProps) => {
  const {
    screenRef,
    wrapperDesktopRef,
    wrapperMobileRef,
    introDesktopRef,
    introMobileRef,
  } = useIntroAnimations({
    onComplete,
  })

  return (
    <FullScreen
      sectionRef={screenRef}
      tw="fixed top-0 left-0 right-0 bottom-0 dark:bg-black bg-primary-400 z-50 flex h-full"
    >
      <div
        ref={wrapperDesktopRef}
        tw="relative m-auto w-full h-40 text-center hidden md:block"
      >
        {words.map((word) => (
          <h2
            ref={(el) =>
              introDesktopRef.current?.push(el as HTMLHeadingElement)
            }
            key={word}
            tw="text-10xl w-full left-0 right-0 text-center m-auto text-black dark:text-primary-400"
          >
            {word}
          </h2>
        ))}
      </div>

      <div
        ref={wrapperMobileRef}
        tw="relative m-auto w-full h-40 lg:h-40 text-center block md:hidden"
      >
        {words.map((word) => (
          <h2
            ref={(el) => introMobileRef.current?.push(el as HTMLHeadingElement)}
            key={word}
            tw="text-5xl w-full left-0 right-0 text-center m-auto text-black dark:text-primary-400"
          >
            {word}
          </h2>
        ))}
      </div>
    </FullScreen>
  )
}
