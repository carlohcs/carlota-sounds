import React, { useState, useRef } from 'react'
// https://codesandbox.io/s/github/gilbarbara/react-inlinesvg/tree/master/demo?file=/src/index.tsx
// https://github.com/gilbarbara/react-inlinesvg
import SVG, { Props as SVGProps } from 'react-inlinesvg'
import { styled } from 'stiches.config'

/* eslint-disable */
const LogoFile = React.forwardRef<SVGElement, SVGProps>((props, ref) => (
  <SVG innerRef={ref} title="MyLogo" {...props} />
))
/* eslint-enable */

// import useRAF from '@/hooks/raf.hook'
// const anime = require('animejs')
// https://www.npmjs.com/package/react-animejs

// https://codepen.io/juliangarnier/pen/vvjqKG?editors=0010
// https://github.com/jmdisuanco/jm-react-anime

// console.log(LogoFile)

const LogoContainer = styled('div', {
  alignSelf: 'flex-start',
  position: 'absolute',
  padding: '0 $nano',
  '&:hover': {
    cursor: 'pointer',
  },
})

// https://css-tricks.com/using-requestanimationframe-with-react-hooks/

// https://css-tricks.com/svg-line-animation-works/
// https://codepen.io/juliangarnier/pen/dwKGoW
const Logo: React.FC = () => {
  const logo = useRef<SVGElement>(null)
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false)

  const handleLogoHover = (hovering: boolean) => {
    setShouldAnimate(hovering)
  }

  return (
    <LogoContainer onMouseEnter={() => handleLogoHover(true)} onMouseLeave={() => handleLogoOver(false)}>
      <LogoFile ref={logo} src={`/carlota-sounds-6.svg`} className={`logo ${shouldAnimate ? 'in' : ''}`} />
    </LogoContainer>
  )
}

export default Logo
