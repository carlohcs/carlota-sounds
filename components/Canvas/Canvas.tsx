import { useCallback } from 'react'

const getDimensions = () => ({
  w: window.document.body.clientWidth,
  h: window.document.body.clientHeight,
})

type CanvasProps = {
  canvasCallback?: (node: HTMLCanvasElement) => void
}

const Canvas = ({ canvasCallback }: CanvasProps) => {
  const containerElementRef = useCallback(
    (node: any) => {
      if (node) {
        if (canvasCallback) {
          canvasCallback(node)
        }
      }
    },
    [canvasCallback]
  )

  return (
    <div className="">
      <canvas width={getDimensions().w} height={getDimensions().h} ref={containerElementRef} />
    </div>
  )
}

export default Canvas
