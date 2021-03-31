import { MutableRefObject, useRef } from 'react'
import { ScreenOverlay } from './ScreenOverlay'
import { useClickAway } from '@lib/hooks/useOnClickAway'

interface ModalProps {
  children: ({ ref }: { ref: MutableRefObject<null> }) => React.ReactNode
  onRequestClose?: () => void
}

export const Modal = ({ children, onRequestClose = () => {} }: ModalProps) => {
  const ref = useRef(null)
  useClickAway(ref, onRequestClose)

  return (
    <>
      <ScreenOverlay>{children({ ref })}</ScreenOverlay>
    </>
  )
}
