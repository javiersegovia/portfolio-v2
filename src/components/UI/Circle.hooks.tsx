import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

export const useAnimations = ({ withAnimation = false, paused = false }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const timeline = gsap.timeline({
    paused,
    delay: 0.5,
  })

  useEffect(() => {
    if (!withAnimation) return

    const target = {
      value: progress,
    }

    timeline.to(target, {
      duration: 1.15,
      value: '+=1000',
      roundProps: 'value',
      ease: 'linear',
      onUpdate() {
        setProgress(target.value)
      },
    })

    timeline.fromTo(
      contentRef.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        delay: 0,
        scale: 1,
        duration: 0.2,
        opacity: 1,
      }
    )

    // todo: add return killing the timeline
  }, [paused, withAnimation])

  return {
    contentRef,
    progress,
  }
}
