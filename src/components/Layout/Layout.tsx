import React from 'react'
import _tw from 'twin.macro'
import { Navbar } from './Navbar'

interface IProps {
  children: React.ReactNode
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
