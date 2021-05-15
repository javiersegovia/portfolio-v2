import { AnimationsFn, useTimeline } from '@lib/hooks/useTimeline'
import { useRef } from 'react'

type TUseAnimations = (timelineOptions?: gsap.TimelineVars) => any

export const useAnimations: TUseAnimations = ({ ...timelineOptions }) => {
  const ulRef = useRef<HTMLUListElement>(null)

  const animations: AnimationsFn = (timeline) => {
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
  }

  useTimeline(animations, { ...timelineOptions })

  return {
    ulRef,
  }
}
