import React, { forwardRef, useRef } from 'react'
import tw from 'twin.macro'

interface FullScreenProps {
  children?: React.ReactNode
  backgroundColor?: 'white'
  minScreen?: boolean
  sectionRef?: any
}

export const FullScreen = ({
  children,
  minScreen,
  backgroundColor,
  sectionRef,
  ...otherProps
}: FullScreenProps) => {
  const localRef = useRef<HTMLElement>(null)
  const ref = sectionRef || localRef

  return (
    <section
      ref={ref}
      className="w-full h-screen relative flex flex-col z-10"
      css={[
        backgroundColor === 'white' && tw`bg-white`,
        minScreen && tw`min-h-screen h-full`,
      ]}
      {...otherProps}
    >
      {children}
    </section>
  )
}
