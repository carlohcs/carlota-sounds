import React, { useRef } from 'react'
// https://github.com/gilbarbara/react-inlinesvg
// https://codesandbox.io/s/github/gilbarbara/react-inlinesvg/tree/master/demo?file=/src/index.tsx
import SVG, { Props as SVGProps } from 'react-inlinesvg'

/* eslint-disable */
const SVGFile = React.forwardRef<SVGElement, SVGProps>((props, ref) => <SVG innerRef={ref} {...props} />)
/* eslint-enable */

type FileType = {
  src: string
  className?: string
}

const InlineSVG: React.FC<FileType> = ({ src, className }) => {
  const currentRef = useRef<SVGElement>(null)

  return <SVGFile ref={currentRef} src={src} className={className} />
}

export default InlineSVG
