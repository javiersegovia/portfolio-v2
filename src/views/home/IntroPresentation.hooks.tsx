import { useRef } from 'react'
import { useTimeline } from '@lib/hooks/useTimeline'

// todo: leave comments

type TUseAnimations = (timelineOptions?: gsap.TimelineVars) => any

export const useIntroAnimations: TUseAnimations = ({ ...timelineOptions }) => {
  const introDesktopRef = useRef<HTMLHeadingElement[]>([])
  const wrapperDesktopRef = useRef<HTMLDivElement>(null)

  const introMobileRef = useRef<HTMLHeadingElement[]>([])
  const wrapperMobileRef = useRef<HTMLDivElement>(null)

  const screenRef = useRef<HTMLDivElement>(null)

  const desktopAnimations = (timeline: gsap.core.Timeline) => {
    const wordsElementsDesktop = introDesktopRef.current
    const wrapperElementsDesktop = wrapperDesktopRef.current

    const screenEl = screenRef.current

    wordsElementsDesktop.forEach((word, i) => {
      const isLast = i === wordsElementsDesktop.length - 1

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
          wrapperElementsDesktop,
          {
            duration: 0.15,
            yPercent: i * -110,
          },
          `+=${i * 0.05}`
        )
      }
    })

    timeline.to(wrapperElementsDesktop, {
      duration: 0,
      overflow: 'visible',
      delay: 0,
    })

    timeline.to(
      wrapperElementsDesktop,
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

  const mobileAnimations = (timeline: gsap.core.Timeline) => {
    const wordsElementsMobile = introMobileRef.current
    const wrapperElementsMobile = wrapperMobileRef.current

    const screenEl = screenRef.current

    wordsElementsMobile.forEach((word, i) => {
      const isLast = i === wordsElementsMobile.length - 1

      const fontSize = 40 + i * 4

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
            fontSize,
            duration: 1,
            yPercent: 0,
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
            fontSize,
            duration: 0.35,
            delay: 0.25,
            ease: 'back',
          }
        )

        timeline.to(
          wrapperElementsMobile,
          {
            duration: 0.15,
            yPercent: i * -40,
          },
          `+=${i * 0.05}`
        )
      }
    })

    timeline.to(wrapperElementsMobile, {
      duration: 0,
      overflow: 'visible',
      delay: 0,
    })

    timeline.to(
      wrapperElementsMobile,
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

  useTimeline(desktopAnimations, { delay: 1, ...timelineOptions })
  useTimeline(mobileAnimations, { delay: 1, ...timelineOptions })

  return {
    introDesktopRef,
    wrapperDesktopRef,
    introMobileRef,
    wrapperMobileRef,
    screenRef,
  }
}
