import dynamic from 'next/dynamic'
import { H1, P } from './basics'
import HeadphoneIcon from '@/components/Icons/Headphone/HeadphoneIcon'
import DandelionIcon from '@/components/Icons/Dandelion/DandelionIcon'

// https://github.com/vercel/next.js/issues/4515#issuecomment-447570395
// Prevents error like: "Server {className, style} didin`t match with Client"
const DandelionLineIconItemsNoSSR = dynamic(
  () => import('@/components/Icons/Dandelion/DandelionLineIcon').then((module) => module.DandelionLineIconItems) as any,
  {
    ssr: false,
  }
)

type LoadingScreenProps = {
  stage?: string
}

const BodyBackground: React.FC<LoadingScreenProps> = ({ children, stage = 'loading' }) => {
  return (
    <div
      className={`${
        stage === 'loading' ? 'animate loading-background' : ''
      } main__content h-screen flex flex-initial flex-col self-center items-center p-xxxs`}
    >
      {children}
    </div>
  )
}

// https://stackoverflow.com/questions/61184591/how-to-implement-loading-screen-in-next-js
const LoadingScreen: React.FC<LoadingScreenProps> = ({ stage = 'loading' }) => {
  return (
    <BodyBackground stage={stage}>
      <div className="w-screen h-screen flex flex-initial self-center items-center flex-col justify-center z-10">
        {stage === 'loading' ? (
          <>
            <div className="z-20 flex flex-col items-center space-y-6">
              <HeadphoneIcon />
              <H1 text="Use headphones for the best experience" className="text-3xl font-medium max-w-xl" />
              <P
                text="Here the deepest feeling are explored: from loneliness, euphoria to the widest reflections."
                className="text-lg max-w-lg"
              />
              <P text="May the reflection of these be with you." className="text-lg max-w-lg" />
            </div>
            <div className="hidden lg:block z-10">
              <DandelionIcon />
              <DandelionLineIconItemsNoSSR />
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </BodyBackground>
  )
}

export default LoadingScreen
