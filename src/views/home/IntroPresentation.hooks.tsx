import { useRef } from 'react'
import { useTimeline } from '@lib/hooks/useTimeline'

// todo: leave comments

type TUseAnimations = (timelineOptions?: gsap.TimelineVars) => any

export const useIntroAnimations: TUseAnimations = ({ ...timelineOptions }) => {
  const introRef = useRef<HTMLHeadingElement[]>([])
  const wrapperRef = useRef<HTMLDivElement>(null)
  const screenRef = useRef<HTMLDivElement>(null)

  const animations = (timeline: gsap.core.Timeline) => {
    const wordsEl = introRef.current
    const wrapperEl = wrapperRef.current
    const screenEl = screenRef.current

    wordsEl.forEach((word, i) => {
      const isLast = i === wordsEl.length - 1

      if (isLast) {
        timeline.fromTo(
          word,
          {
            yPercent: 0,
            fontSize: 0,
            delay: 0,
            skewX: 0,
            skewY: 0,
          },
          {
            fontSize: 140 + i * 30,
            duration: 1,
            yPercent: 50,
            delay: 0,
            skewX: 10,
            skewY: 20,
            ease: 'elastic',
          }
        )
      } else {
        timeline.fromTo(
          word,
          {
            fontSize: 0,
            yPercent: 0,
            skewX: 0,
            skewY: 0,
          },
          {
            skewX: 7.5,
            skewY: 20,
            yPercent: 0,
            fontSize: 140 + i * 30,
            duration: 0.35,
            delay: 0.25,
            ease: 'back',
          }
        )

        timeline.to(
          wrapperEl,
          {
            duration: 0.15,
            yPercent: i * -110,
          },
          `+=${i * 0.05}`
        )
      }
    })

    timeline.to(wrapperEl, {
      duration: 0,
      overflow: 'visible',
      delay: 0,
    })

    timeline.to(
      wrapperEl,
      {
        skewY: 0,
        skewX: 0,
        scale: 10,
        duration: 1,
        delay: 0,
        opacity: 0,
      },
      `outAnimation`
    )

    timeline.to(
      screenEl,
      {
        opacity: 0,
        display: 'none',
        delay: 0,
      },
      `outAnimation+=0.25`
    )
  }

  useTimeline(animations, { delay: 1, ...timelineOptions })

  return {
    introRef,
    wrapperRef,
    screenRef,
  }
}
