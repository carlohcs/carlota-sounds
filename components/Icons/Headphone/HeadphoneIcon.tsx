import React from 'react'
import SVG from '@/components/SVG/SVG'
import style from '@/components/Icons/Headphone/Headphone.module.css'

// https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

// const circleDegre = 740.6618840103296

// const strokeDashOffsetCircular = keyframes({
//   from: {
//     strokeDashoffset: circleDegre,
//   },
//   to: {
//     strokeDashoffset: 0,
//   },
// })

// https://www.carlrippon.com/react-children-with-typescript/
// https://css-tricks.com/almanac/properties/s/stroke-dashoffset/

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
    // <HeadphoneIconContainer>
    <div className={`${style.headphoneContainer}`}>
      <SVG src="/headphone.svg" className={`${style.iconHeadphone} cs-iconHeadphone`} />
    </div>
    // </HeadphoneIconContainer>
  )
}

export default HeadphoneIcon
