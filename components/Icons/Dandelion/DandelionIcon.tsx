import React from 'react'
import SVG from '@/components/SVG/SVG'
import style from '@/components/Icons/Dandelion/Dandelion.module.css'
import { styled } from 'stiches.config'
import { keyframes } from '@stitches/react'

// https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

// https://www.carlrippon.com/react-children-with-typescript/
// https://css-tricks.com/almanac/properties/s/stroke-dashoffset/
const DandelionIconContainer = styled('div', {
  width: '290px',
  height: '290px',
  position: 'absolute',
  left: 0,
  bottom: 0,
})

type BasicElementProps = {
  className?: string
}

const DandelionIcon: React.FC<BasicElementProps> = ({ className }) => {
  // https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  // const containerElementRef = useCallback<CallbackType>(
  // const containerElementRef = useCallback((node: any) => {
  //   if (node) {
  //     console.log('INNER HTML: ', node.innerHTML)
  //     // animate(node)
  //   }
  // }, [])
  //  ref={containerElementRef}

  return (
    <div className={className}>
      <DandelionIconContainer>
        <SVG src="/dandelion-0.svg" className={`animate scale ${style.icon} ${style.dandelion}`} />
      </DandelionIconContainer>
    </div>
  )
}

export default DandelionIcon
