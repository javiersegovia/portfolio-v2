import gsap from 'gsap'
import { useEffect, useState } from 'react'

type TUseAnimatedSVGProps = {
  withAnimation?: boolean
  isPaused?: boolean
  timelineOptions?: gsap.TimelineVars
  tweenOptions?: gsap.TweenVars
}

export const useAnimatedSVG = ({
  withAnimation = false,
  isPaused = false,
  timelineOptions = {},
  tweenOptions = {},
}: TUseAnimatedSVGProps) => {
  const [progress, setProgress] = useState(0)

  const timeline = gsap.timeline({
    paused: isPaused,
    ...timelineOptions,
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
      ...tweenOptions,
    })
  }, [isPaused, withAnimation])

  return {
    progress,
  }
}
