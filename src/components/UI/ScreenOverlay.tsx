import tw from 'twin.macro'
import { useDisableBodyScroll } from '@lib/hooks/useDisableBodyScroll'

interface ScreenOverlayProps {
  children?: React.ReactNode
  withoutStyles?: boolean
}

export const ScreenOverlay = ({
  children,
  withoutStyles = false,
  ...elementProps
}: ScreenOverlayProps) => {
  useDisableBodyScroll()

  return (
    <>
      <div
        role="dialog"
        tw="fixed w-screen h-screen top-0 bottom-0 left-0 right-0 z-10 flex"
        css={[
          !withoutStyles &&
            tw`bg-gray-300 dark:bg-gray-600 dark:bg-opacity-70 bg-opacity-70 z-40`,
        ]}
        {...elementProps}
      >
        {children}
      </div>
    </>
  )
}
