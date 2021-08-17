import React from 'react'
import SVG from '@/components/SVG/SVG'
import style from '@/components/Icons/Headphone/Headphone.module.css'
import { styled } from 'stiches.config'

const HeadphoneIconContainer = styled('div', {
  width: '140px',
  height: '140px',
})

const HeadphoneIcon: React.FC = () => {
  return (
    <HeadphoneIconContainer>
      <SVG src="/headphone.svg" className={`${style.icon} ${style.headphone}`} />
    </HeadphoneIconContainer>
  )
}

export default HeadphoneIcon
