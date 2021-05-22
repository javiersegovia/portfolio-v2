import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { HiMoon, HiSun } from 'react-icons/hi'

export const ThemeButton = ({ ...props }) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      type="button"
      tw="hover:(text-primary-400) text-2xl"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...props}
    >
      {theme === 'light' ? <HiMoon /> : <HiSun />}
    </button>
  )
}
