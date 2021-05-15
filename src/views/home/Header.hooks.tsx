import gsap from 'gsap'
import { useRef, useEffect, useMemo } from 'react'

type TUseAnimations = (timelineOptions?: gsap.TimelineVars) => any

export const useAnimations: TUseAnimations = ({ ...timelineOptions }) => {
  const h3Ref = useRef<HTMLHeadingElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  const { paused } = timelineOptions

  const timeline = useMemo(
    () =>
      gsap.timeline({
        paused,
        delay: 0.5,
      }),
    [paused]
  )

  useEffect(() => {
    const fromTo = {
      from: {
        opacity: 0,
        scale: 0,
      },
      to: {
        opacity: 1,
        scale: 1,
      },
    }

    timeline.fromTo(h3Ref.current, fromTo.from, fromTo.to)
    timeline.fromTo(h1Ref.current, fromTo.from, fromTo.to)
    timeline.fromTo(descriptionRef.current, fromTo.from, fromTo.to)
  }, [timeline])

  return {
    h3Ref,
    h1Ref,
    descriptionRef,
  }
}
