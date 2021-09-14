import React from 'react'
import SVG from '@/components/SVG/SVG'
import style from '@/components/Icons/Headphone/Headphone.module.css'

// https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

// https://www.carlrippon.com/react-children-with-typescript/
// https://css-tricks.com/almanac/properties/s/stroke-dashoffset/

type HeadphoneIconProps = {
  blocked?: boolean
  className?: string
}

const HeadphoneIcon = ({ blocked, className }: HeadphoneIconProps) => {
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
    <div className={`${className} ${style.headphoneContainer} ${blocked ? style.headphoneContainerBlocked : ''}`}>
      <SVG
        src="/headphone.svg"
        className={`${style.iconHeadphone} ${blocked ? style.iconHeadphoneBlocked : ''} cs-iconHeadphone`}
      />
    </div>
    // </HeadphoneIconContainer>
  )
}

export default HeadphoneIcon
