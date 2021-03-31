import { RefObject, useEffect, useRef } from 'react'

type PossibleEvents = ('click' | 'mousedown' | 'touchstart')[]

export const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event?: MouseEvent | TouchEvent | E) => void,
  events: PossibleEvents = ['mousedown', 'touchstart']
) => {
  const savedCallback = useRef(onClickAway)
  useEffect(() => {
    savedCallback.current = onClickAway
  }, [onClickAway])
  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const { current: el } = ref
      el && !el.contains(event.target as Node) && savedCallback.current(event)
    }
    for (const eventName of events) {
      document.addEventListener(eventName, handler)
    }
    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handler)
      }
    }
  }, [events, ref])
}
