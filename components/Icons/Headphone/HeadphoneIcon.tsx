import React from 'react'
import SVG from '@/components/SVG/SVG'
import style from '@/components/Icons/Headphone/Headphone.module.css'
import { styled } from 'stiches.config'
import { keyframes } from '@stitches/react'

// https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

const circleDegre = 740.6618840103296

const strokeDashOffsetCircular = keyframes({
  from: {
    strokeDashoffset: circleDegre,
    // strokeDasharray: ,
  },
  to: {
    strokeDashoffset: 0,
    // strokeDasharray: ,
  },
})

// https://www.carlrippon.com/react-children-with-typescript/
// https://css-tricks.com/almanac/properties/s/stroke-dashoffset/
const HeadphoneIconContainer = styled('div', {
  width: '140px',
  height: '140px',
  'circle:nth-of-type(2)': {
    /* calculate using: (2 * PI * R) */
    // circleDegre
    strokeDashoffset: circleDegre,
    strokeDasharray: circleDegre,
    animation: `${strokeDashOffsetCircular} 2s linear alternate infinite`,
  },
})

const HeadphoneIcon = () => {
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
    <HeadphoneIconContainer>
      <SVG src="/headphone.svg" className={`${style.icon} ${style.headphone}`} />
    </HeadphoneIconContainer>
  )
}

export default HeadphoneIcon
