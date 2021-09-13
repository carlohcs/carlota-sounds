import '@/styles/globals.css'
import '@/components/Logo/Logo.css'
import '@/components/basics/Typography/Typography.css'
import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Splash } from '@/components/Splash/Splash'
import BodyBackground from '@/components/BodyBackground'
import { useRouter } from 'next/router'
import * as gtag from '../libs/gtag'
const isProduction = process.env.NODE_ENV === 'production'

// https://www.reddit.com/r/nextjs/comments/nqjs8r/full_page_loading_splash_screen_with_nextjs_and/
function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter()
  const [loaded, setLoaded] = useState(false)

  if (process.browser) {
    require('@/components/commons/polyfills')
  }

  const handleLoaded = (loaded: boolean) => {
    setLoaded(loaded)
  }

  // useEffect(() => {
  //   const handleRouteChange = (url: URL) => {
  //     /* invoke analytics function only for production */
  //     gtag.pageview(url)

  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  useEffect(() => {
    if (isProduction) {
      gtag.pageview(new URL(window.location.href))
    }
  }, [])

  return (
    <BodyBackground stage={loaded ? 'loaded' : 'loading'}>
      <Splash handleLoad={handleLoaded}>
        <Component {...pageProps} />
      </Splash>
    </BodyBackground>
  )
}
export default MyApp
