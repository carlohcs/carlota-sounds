import React from 'react'
import SVG from '@/components/SVG/SVG'
import style from '@/components/Icons/Dandelion/Dandelion.module.css'

// https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

// https://www.carlrippon.com/react-children-with-typescript/
// https://css-tricks.com/almanac/properties/s/stroke-dashoffset/
type BasicElementProps = {
  className?: string
}

const DandelionIcon: React.FC<BasicElementProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className={style.DandelionContainer}>
        <SVG src="/dandelion-0.svg" className={`animate scale ${style.icon} ${style.dandelion}`} />
      </div>
    </div>
  )
}

export default DandelionIcon
