import React from 'react'

type LoadingScreenProps = {
  stage?: string
}

const BodyBackground: React.FC<LoadingScreenProps> = ({ children, stage = 'loading' }) => {
  const currentClassName = stage === 'loading' ? 'loading-background' : 'loading-background loaded-background'
  return (
    <div
      className={`animate ${currentClassName} main__content fade-in w-screen h-screen flex flex-initial flex-col self-center items-center`}
    >
      {children}
    </div>
  )
}

export default BodyBackground
