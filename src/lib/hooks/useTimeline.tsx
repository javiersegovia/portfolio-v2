import gsap from 'gsap'
import { useEffect, useRef } from 'react'

// todo: leave comments

type TUseTimeline = (
  animationsFunc: (timeline: gsap.core.Timeline) => void,
  timelineOptions?: gsap.TimelineVars
) => {
  timeline: gsap.core.Timeline
}

export const useTimeline: TUseTimeline = (
  animationsFunc,
  { ...timelineOptions }
) => {
  const timeline = gsap.timeline({
    ...timelineOptions,
  })

  const animationRef = useRef(animationsFunc)

  useEffect(() => {
    animationRef?.current(timeline)
    return () => {
      timeline.kill()
    }
  }, [animationRef, timeline])

  return {
    timeline,
  }
}
