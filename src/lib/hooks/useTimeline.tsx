import gsap from 'gsap'
import { useCallback, useEffect, useRef } from 'react'

// todo: leave comments

export type AnimationsFn = (timeline: gsap.core.Timeline) => void

type TUseTimeline = (
  animationsFunc: AnimationsFn,
  timelineOptions?: gsap.TimelineVars
) => gsap.core.Timeline

export const useTimeline: TUseTimeline = (
  animationsFunc,
  { ...timelineOptions }
) => {
  const timelineRef = useRef(
    gsap.timeline({
      ...timelineOptions,
    })
  )

  const animationRef = useRef(animationsFunc)

  useEffect(() => {
    const timeline = timelineRef.current

    animationRef?.current?.(timeline)
    return () => {
      timeline.kill()
    }
  }, [animationRef])

  return timelineRef.current
}
