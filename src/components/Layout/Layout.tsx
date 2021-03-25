import React from 'react'

interface IProps {
  children: React.ReactNode
}

export function Layout({ children }: IProps) {
  return <div className="bg-red-100">{children}</div>
}
