import React, { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

// type Props = {
//   children: React.FunctionComponent<JSX.Element> | JSX.Element | React.ReactChild | React.ReactNode | Element
//   children?: React.ReactNode
//   Loader: React.FunctionComponent<JSX.Element>
//   children?: React.ReactChild | React.ReactFragment | React.ReactPortal | boolean | null | undefined
//   children?: React.ReactChild | React.ReactChildren | JSX.Element | React.PropsWithChildren
// }

type Props = {
  children: React.PropsWithChildren<any>
  handleLoad: (loaded: boolean) => void
}

const loadingTime = 7000

// https://www.carlrippon.com/react-children-with-typescript/
export const Splash = ({ children, handleLoad }: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // whatever you need to do
    setTimeout(() => {
      if (loading) {
        setLoading(false)
        handleLoad(true)
      }
    }, loadingTime)
  }, [loading, handleLoad])

  // return !loading ? children : <LoadingScreen stage="loading" />

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={loading}
        addEndListener={(node: HTMLElement, done: any) => {
          node.addEventListener('transitionend', done, false)
        }}
        classNames="loading-transition"
      >
        <div>{!loading ? children : <LoadingScreen stage="loading" />}</div>
      </CSSTransition>
    </SwitchTransition>
  )
}
