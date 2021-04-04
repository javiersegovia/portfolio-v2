import { MutableRefObject, ReactNode } from 'react'
import { ScreenOverlay } from '@components/UI/ScreenOverlay'
import { useClickAway } from '@lib/hooks/useClickAway'
import { Portal } from 'react-portal'

interface ChildrenProps {
  ref: MutableRefObject<null | HTMLDivElement>
}

interface ModalProps {
  children: ({ ref }: ChildrenProps) => ReactNode
  onRequestClose?: () => void
  withOverlay?: boolean
  wrapperElement?: React.ElementType
}

export const Modal = ({
  children,
  onRequestClose,
  withOverlay = false,
}: ModalProps) => {
  const ref = useClickAway(onRequestClose)

  return (
    <Portal>
      <ScreenOverlay withoutStyles={!withOverlay}>
        {children({ ref })}
      </ScreenOverlay>
    </Portal>
  )
}
