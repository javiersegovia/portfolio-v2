import { SVGProps } from 'react'
import { useAnimations } from './Circle.hooks'

type CircleProps = {
  children?: React.ReactNode
  size?: number
  paused?: boolean
  withAnimation?: boolean
  svgProps?: SVGProps<SVGSVGElement>
}

export const Circle = ({
  children,
  withAnimation = false,
  paused = false,
  size = 250,
  svgProps,
  ...styles
}: CircleProps) => {
  const { progress, contentRef } = useAnimations({
    paused,
    withAnimation,
  })
  return (
    <div
      tw="relative flex items-center justify-center text-center text-lg"
      style={{
        width: size,
        height: size,
      }}
      {...styles}
    >
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        tw="absolute w-full h-full"
        preserveAspectRatio="xMinYMin"
        {...svgProps}
      >
        <circle
          cx="50%"
          cy="50%"
          r="48%"
          strokeDasharray={`${withAnimation ? progress : 1000}, 1000`}
          strokeDashoffset={`${withAnimation ? progress : 1000}, 1000`}
          stroke="#ECB21D"
        />
        <circle
          cx="51%"
          cy="52%"
          r="48%"
          stroke="black"
          strokeDasharray={`${withAnimation ? progress : 1000}, 1000`}
          strokeDashoffset={`${withAnimation ? progress : 1000}, 1000`}
          tw="text-black dark:text-white stroke-current"
        />
      </svg>

      <div ref={contentRef}>
        <div className="trigger" />
        {children}
      </div>
    </div>
  )
}
