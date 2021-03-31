import { useEffect } from 'react'

export const getScrollPosition = () => ({
  x: document.documentElement.scrollLeft || document.body.scrollLeft,
  y: document.documentElement.scrollTop || document.body.scrollTop,
})

export const disableScroll = () => {
  const { x, y } = getScrollPosition()

  document.body.style.overflowY = 'scroll'
  document.body.style.position = 'fixed'
  document.body.style.top = `-${y}px`
  document.body.style.left = `${x}px`
}

export const enableScroll = () => {
  document.body.style.overflowY = ''
  document.body.style.position = ''

  const { top: scrollY, left: scrollX } = document.body.style

  document.body.style.top = ''
  document.body.style.left = ''

  window.scrollTo(parseInt(scrollX || '0') * -1, parseInt(scrollY || '0') * -1)
}

export const useDisableBodyScroll = () => {
  useEffect(() => {
    disableScroll()
    return () => {
      enableScroll()
    }
  }, [])
}
