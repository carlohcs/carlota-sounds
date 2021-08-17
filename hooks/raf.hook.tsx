import React, { useEffect, useRef } from 'react'

/**
 * Use requestAnimationFrame with Hooks in a declarative way.
 *
 * @from https://gist.github.com/Danziger/336e75b6675223ad805a88c2dfdcfd4a
 * @see https://stackoverflow.com/a/59274004/3723993
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export default function useRAF(
  callback: React.EffectCallback,
  isRunning: boolean
): React.MutableRefObject<number | null> {
  const rafRef = useRef<number | null>(null)
  const callbackRef = useRef(callback)

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setInterval ticks again, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // interval will be reset.

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      rafRef.current = window.requestAnimationFrame(() => {
        callbackRef.current()

        tick()
      })
    }

    if (isRunning) {
      tick()

      // Clear RAF if the components is unmounted or the delay changes:
      return () => {
        window.cancelAnimationFrame(rafRef.current || 0)
      }
    }
  }, [isRunning])

  // In case you want to manually clear the RAF from the consuming component...:
  return rafRef
}
