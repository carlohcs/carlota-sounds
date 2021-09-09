import '@/styles/globals.css'
import '@/components/Logo/Logo.css'
import '@/components/basics/Typography/Typography.css'
import React, { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { Splash } from '@/components/Splash/Splash'
import BodyBackground from '@/components/BodyBackground'

// https://www.reddit.com/r/nextjs/comments/nqjs8r/full_page_loading_splash_screen_with_nextjs_and/
function MyApp({ Component, pageProps }: AppProps) {
  const [loaded, setLoaded] = useState(false)

  if (process.browser) {
    require('@/components/commons/polyfills')
  }

  const handleLoaded = (loaded: boolean) => {
    setLoaded(loaded)
  }

  return (
    <BodyBackground stage={loaded ? 'loaded' : 'loading'}>
      <Splash handleLoad={handleLoaded}>
        <Component {...pageProps} />
      </Splash>
    </BodyBackground>
  )
}
export default MyApp
