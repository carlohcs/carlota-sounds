import { useCallback } from 'react'
import { run } from './bubbles'

const getDimensions = () => ({
  w: window.document.body.clientWidth,
  h: window.document.body.clientHeight,
})

const setBackground = (node: HTMLCanvasElement) => {
  console.log('INNER HTML: ', node)
  run(node)
}

const Canvas = () => {
  const containerElementRef = useCallback((node: any) => {
    if (node) {
      setBackground(node)
    }
  }, [])

  return (
    <>
      <canvas id="canvas" width={getDimensions().w} height={getDimensions().h} ref={containerElementRef} />
    </>
  )
}

export default Canvas
