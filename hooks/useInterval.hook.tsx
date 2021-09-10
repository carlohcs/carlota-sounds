import { useEffect, useRef } from 'react'

// FROM: https://stackoverflow.com/a/53395342
function useInterval(callback: any, delay: number) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current()
    }, delay)
    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
