import React, { useEffect, useState } from 'react'
import LoadingScreen from '@/components/LoadingScreen'

type Props = {
  // children: React.FunctionComponent<JSX.Element> | JSX.Element | React.ReactChild | React.ReactNode | Element
  // children?: React.ReactNode
  // Loader: React.FunctionComponent<JSX.Element>
  // children?: React.ReactChild | React.ReactFragment | React.ReactPortal | boolean | null | undefined
  // children?: React.ReactChild | React.ReactChildren | JSX.Element | React.PropsWithChildren
}

// https://www.carlrippon.com/react-children-with-typescript/
export const Splash = ({ children }: React.PropsWithChildren<any>) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // whatever you need to do
    setTimeout(() => {
      if (loading) {
        setLoading(false)
      }
    }, 10000)
  }, [loading])

  return !loading ? children : <LoadingScreen />
}
