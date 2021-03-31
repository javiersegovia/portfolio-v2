import { useDisableBodyScroll } from '@lib/hooks/useDisableBodyScroll'
import { Portal } from 'react-portal'

interface ScreenOverlayProps {
  children?: React.ReactNode
  disableScroll?: boolean
  onClick?: () => void
}

export const ScreenOverlay = ({ children }: ScreenOverlayProps) => {
  useDisableBodyScroll()

  return (
    <>
      <Portal>
        <div
          role="dialog"
          tw="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 bg-red-400 bg-opacity-70 z-40 cursor-default flex"
        >
          {children}
        </div>
      </Portal>
    </>
  )
}
