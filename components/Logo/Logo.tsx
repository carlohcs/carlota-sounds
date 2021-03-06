import React, { useState } from 'react'
import SVG from '@/components/SVG/SVG'
import { event as gtagEvent } from '@/libs/gtag'

// import useRAF from '@/hooks/raf.hook'
// const anime = require('animejs')
// https://www.npmjs.com/package/react-animejs

// https://codepen.io/juliangarnier/pen/vvjqKG?editors=0010
// https://github.com/jmdisuanco/jm-react-anime

// console.log(LogoFile)

// https://css-tricks.com/using-requestanimationframe-with-react-hooks/

// https://css-tricks.com/svg-line-animation-works/
// https://codepen.io/juliangarnier/pen/dwKGoW
const Logo: React.FC = () => {
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(false)

  const handleLogoHover = (hovering: boolean) => {
    setShouldAnimate(hovering)
  }

  return (
    <div
      id="logo"
      onClick={() => {
        gtagEvent({
          category: 'Logo',
          action: 'Clique',
        })
      }}
      onMouseEnter={() => handleLogoHover(true)}
      onMouseLeave={() => handleLogoHover(false)}
    >
      <SVG src="/carlota-sounds-6.svg" className={`logo ${shouldAnimate ? 'in' : ''}`} />
    </div>
  )
}

export default Logo
