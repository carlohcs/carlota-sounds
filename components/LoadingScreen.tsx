import { H1, P } from './basics'
// import BodyBackground from '@/components/BodyBackground'
import { styled } from '../stiches.config'
import HeadphoneIcon from '@/components/Icons/Headphone/HeadphoneIcon'
import DandelionIcon from '@/components/Icons/Dandelion/DandelionIcon'
// import DandelionLineIcon from '@/components/Icons/Dandelion/DandelionLineIcon'
import { DandelionLineIcon, DandelionLineIconItems } from '@/components/Icons/Dandelion/DandelionLineIcon'

type LoadingScreenProps = {
  stage: string
}

const BodyBackground: React.FC<LoadingScreenProps> = ({ children, stage = 'loading' }) => {
  const BodyBackgroundStyled = styled('div', {
    // linearGradient: stage === 'loading' ? '$loadingGradient' : '$loadedGradient',
    height: '$full',
    // backgroundColor: 'rgba(0, 0, 0, .9)'
  })
  return (
    <BodyBackgroundStyled className={`${stage === 'loading' ? 'animate loading-background' : ''} main__content`}>
      {children}
    </BodyBackgroundStyled>
  )
}

const Container = styled('div', {
  height: '$fullVh',
  alignSelfCenter: true,
  childrenAtCenter: 'column',
  padding: '$xxs',
  mW: '740px',
  zIndex: 2,
})

// https://stackoverflow.com/questions/61184591/how-to-implement-loading-screen-in-next-js
const LoadingScreen: React.FC<LoadingScreenProps> = ({ stage = 'loading' }) => {
  return (
    <BodyBackground stage={stage}>
      <Container>
        {stage === 'loading' ? (
          <>
            <HeadphoneIcon />
            <H1 text="Use headphones for the best experience" />
            <P
              text="Here the deepest feeling are explored: 
from loneliness, euphoria to the widest reflections.

May the reflection of these be with you."
            />
          </>
        ) : (
          ''
        )}
      </Container>
      <DandelionIcon />
      <DandelionLineIconItems />
    </BodyBackground>
  )
}

export default LoadingScreen
