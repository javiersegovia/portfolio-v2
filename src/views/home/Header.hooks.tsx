import React from 'react'

type TUseAnimations = (timelineOptions?: gsap.TimelineVars) => any

export const useAnimations: TUseAnimations = ({ ...timelineOptions }) => {
  const runAnimations = () => {}

  return <div></div>
}
