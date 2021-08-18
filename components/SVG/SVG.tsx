import React, { useRef } from 'react'
// https://github.com/gilbarbara/react-inlinesvg
// https://codesandbox.io/s/github/gilbarbara/react-inlinesvg/tree/master/demo?file=/src/index.tsx
import SVG, { Props as SVGProps } from 'react-inlinesvg'

/* eslint-disable */
const InlineSVG = React.forwardRef<SVGElement, SVGProps>((props, ref) => <SVG innerRef={ref} {...props} />)
/* eslint-enable */

export default InlineSVG
