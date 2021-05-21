import gsap from 'gsap'
import { useRef, useEffect, useMemo } from 'react'

type TUseAnimations = (timelineOptions?: gsap.TimelineVars) => any

export const useAnimations: TUseAnimations = ({ ...timelineOptions }) => {
  const h3Ref = useRef<HTMLHeadingElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

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

    const refsToAnimate = [h3Ref, h1Ref, descriptionRef, arrowRef]

    refsToAnimate.forEach((ref) => {
      timeline.fromTo(ref.current, fromTo.from, fromTo.to)
    })
  }, [timeline])

  return {
    h3Ref,
    h1Ref,
    descriptionRef,
    arrowRef,
  }
}
