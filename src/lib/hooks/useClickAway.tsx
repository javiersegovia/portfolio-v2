import { useEffect, useRef } from 'react'

type PossibleEvents = ('click' | 'mousedown' | 'touchstart')[]

export const useClickAway = <E extends Event = Event>(
  onClickAway?: (event?: MouseEvent | TouchEvent | E) => void,
  events: PossibleEvents = ['mousedown', 'touchstart']
) => {
  const ref = useRef<HTMLDivElement>(null)
  const savedCallback = useRef(onClickAway)

  useEffect(() => {
    if (!onClickAway) return

    savedCallback.current = onClickAway
  }, [onClickAway])

  useEffect(() => {
    if (!onClickAway || !savedCallback.current) return

    const handler = (event: MouseEvent | TouchEvent) => {
      const { current: element } = ref

      if (!element?.contains(event.target as Node) && savedCallback.current) {
        savedCallback.current(event)
      }
    }

    for (const eventName of events) {
      document.addEventListener(eventName, handler)
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handler)
      }
    }
  }, [events, ref, onClickAway])

  return ref
}
