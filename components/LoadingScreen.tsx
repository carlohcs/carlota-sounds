import React from 'react'
import { H1, P } from './basics'
import BodyBackground from '@/components/BodyBackground'

const LoadingScreen: React.FC = () => {
  return (
    <BodyBackground>
      <H1 text="Use headphones for the best experience" />
      <P
        text="Here the deepest feeling are explored: 
from loneliness, euphoria to the widest reflections.

May the reflection of these be with you."
      />
    </BodyBackground>
  )
}

export default LoadingScreen
