import React from 'react'

interface TitleProps {
  children: React.ReactNode
}

export const Title = ({ children, ...props }: TitleProps) => {
  return (
    <h3 tw="text-5xl md:text-6xl lg:text-6xl xl:text-7xl" {...props}>
      {children}
    </h3>
  )
}
