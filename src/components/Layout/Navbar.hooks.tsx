import gsap from 'gsap'
import { useEffect, useMemo, useRef } from 'react'

type TUseAnimations = (timelineOptions?: gsap.TimelineVars) => any

export const useAnimations: TUseAnimations = ({ ...timelineOptions }) => {
  const ulRef = useRef<HTMLUListElement>(null)

  const { paused } = timelineOptions

  const timeline = useMemo(
    () =>
      gsap.timeline({
        delay: 1.2,
        paused,
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

    timeline.fromTo(ulRef.current, fromTo.from, fromTo.to)
  }, [timeline])

  return {
    ulRef,
  }
}
