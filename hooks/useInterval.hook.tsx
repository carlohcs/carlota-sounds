import { useEffect, useRef } from 'react'

type RandomFunction = () => any

// FROM: https://stackoverflow.com/a/53395342
function useInterval(callback: RandomFunction = () => {}, delay: number) {
  const savedCallback = useRef<any>()

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
