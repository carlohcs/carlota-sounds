import { useCallback } from 'react'
import { run } from './bubbles'

const getDimensions = () => ({
  w: window.document.body.clientWidth,
  h: window.document.body.clientHeight,
})

const setBackground = (node: HTMLCanvasElement) => {
  run(node)
}

const Canvas = () => {
  const containerElementRef = useCallback((node: any) => {
    if (node) {
      setBackground(node)
    }
  }, [])
  // w-full h-full
  return (
    <div className="">
      <canvas id="canvas" width={getDimensions().w} height={getDimensions().h} ref={containerElementRef} />
    </div>
  )
}

export default Canvas
