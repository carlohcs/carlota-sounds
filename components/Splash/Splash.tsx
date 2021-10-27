import React, { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { sounds } from '@/components/GlobalState'

type Props = {
  children: React.PropsWithChildren<any>
  handleLoad: (loaded: boolean) => void
}

const loadingTime = 5000

// https://www.carlrippon.com/react-children-with-typescript/
export const Splash = ({ children, handleLoad }: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading && process.browser) {
      const SoundInstance = require('../Media/Player/Sound/Sound').default
      const sound = SoundInstance(sounds.data, 0)
      
      sound.expose()
    }

    // whatever you need to do
    setTimeout(() => {
      if (loading) {
        setLoading(false)
        handleLoad(true)
      }
    }, loadingTime)
  }, [loading, handleLoad])

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={loading.toString()}
        addEndListener={(node: HTMLElement, done: any) => {
          node.addEventListener('transitionend', done, false)
        }}
        classNames="loading-transition"
      >
        <div className="overflow-hidden">{!loading ? children : <LoadingScreen stage="loading" />}</div>
      </CSSTransition>
    </SwitchTransition>
  )
}
