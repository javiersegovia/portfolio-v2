import React from 'react'
import tw from 'twin.macro'

interface FullScreenProps {
  children?: React.ReactNode
  backgroundColor?: 'white'
  minScreen?: boolean
}

export const FullScreen = ({
  children,
  minScreen,
  backgroundColor,
  ...otherProps
}: FullScreenProps) => (
  <section
    className="w-full h-screen relative flex flex-col z-10"
    css={[
      backgroundColor === 'white' && tw`bg-white`,
      minScreen && tw`min-h-screen`,
    ]}
    {...otherProps}
  >
    {children}
  </section>
)
