import React from 'react'
import { styled } from '../stiches.config'

const BodyBackgroundStyled = styled('div', {
  background: '$loadingGradient',
  height: '$full',
})

const BodyBackground: React.FC = ({ children }) => {
  return <BodyBackgroundStyled>{children}</BodyBackgroundStyled>
}

export default BodyBackground
