import { FullScreen } from '@components/UI'
import { useAnimations } from './IntroPresentation.hooks'

const words = [
  'innovation',
  'minimalism',
  'creativity',
  'technology',
  'evolution',
]

interface IntroPresentationProps {
  onComplete: any
}

export const IntroPresentation = ({ onComplete }: IntroPresentationProps) => {
  const { screenRef, wrapperRef, introRef } = useAnimations({
    onComplete,
  })

  return (
    <FullScreen
      sectionRef={screenRef}
      tw="fixed top-0 left-0 right-0 bottom-0 bg-teal-500 z-50 flex"
    >
      <div
        ref={wrapperRef}
        tw="relative leading-10 m-auto w-full h-40 text-center"
      >
        {words.map((word) => (
          <h2
            ref={(el) => introRef.current?.push(el as HTMLHeadingElement)}
            key={word}
            className="text-10xl left-0 right-0 text-center m-auto text-white"
          >
            {word}
          </h2>
        ))}
      </div>
    </FullScreen>
  )
}
