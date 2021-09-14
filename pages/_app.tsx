import '@/styles/globals.css'
import '@/components/Logo/Logo.css'
import '@/components/basics/Typography/Typography.css'
import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Splash } from '@/components/Splash/Splash'
import BodyBackground from '@/components/BodyBackground'
// import { useRouter } from 'next/router'
import * as gtag from '../libs/gtag'
import TagManager from 'react-gtm-module'
import configs from '@/etc/configs'

const isProduction = process.env.NODE_ENV === 'production'

// https://www.reddit.com/r/nextjs/comments/nqjs8r/full_page_loading_splash_screen_with_nextjs_and/
function MyApp({ Component, pageProps, router }: AppProps) {
  // const router = useRouter()
  const [loaded, setLoaded] = useState(false)
  const isPage404 = router.route === '/404'

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

      const tagManagerArgs = {
        gtmId: configs.metrics.GTM,
      }

      TagManager.initialize(tagManagerArgs)
    }
  }, [])

  return isPage404 ? (
    <Component {...pageProps} />
  ) : (
    <BodyBackground stage={loaded ? 'loaded' : 'loading'}>
      <Splash handleLoad={handleLoaded}>
        <Component {...pageProps} />
      </Splash>
    </BodyBackground>
  )
}
export default MyApp
