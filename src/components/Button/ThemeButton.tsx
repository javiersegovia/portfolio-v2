import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { HiMoon, HiSun } from 'react-icons/hi'

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      type="button"
      tw="hover:(text-teal-500) ml-auto sm:ml-0"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <HiMoon /> : <HiSun />}
    </button>
  )
}
