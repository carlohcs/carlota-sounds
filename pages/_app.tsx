import '@/styles/globals.css'
import '@/components/Logo/Logo.css'
import '@/components/basics/Typography/Typography.css'
import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import { Splash } from '@/components/Splash/Splash'
import BodyBackground from '@/components/BodyBackground'
// import { sentEventByItem } from '@/libs/gtag'

// let clickEvent = (item: Element) => {
//   return (/* evt */) => {
//     sentEventByItem(item)
//   }
// }

// https://www.reddit.com/r/nextjs/comments/nqjs8r/full_page_loading_splash_screen_with_nextjs_and/
function MyApp({ Component, pageProps, router }: AppProps) {
  const [loaded, setLoaded] = useState(false)
  const isErrorPage = router.route === '/404' || router.route === '/500'

  if (process.browser) {
    require('@/components/commons/polyfills')
  }

  const handleLoaded = (loaded: boolean) => {
    setLoaded(loaded)
  }

  // const containerElementRef = useCallback(
  //   (node: any) => {
  //     if (node && !isErrorPage) {
  //       const trackElements = document.querySelectorAll('.cs-track-data-click')

  //       let events: any = []

  //       trackElements.forEach((item, index) => {
  //         events[index] = clickEvent(item)
  //         item.addEventListener('click', events[index])
  //       })
  //     }
  //   },
  //   [isErrorPage]
  // )

  return (
    <>
      {isErrorPage ? (
        <Component {...pageProps} />
      ) : (
        <BodyBackground stage={loaded ? 'loaded' : 'loading'}>
          <Splash handleLoad={handleLoaded}>
            {/* <div ref={containerElementRef}> */}
            <Component {...pageProps} />
            {/* </div> */}
          </Splash>
        </BodyBackground>
      )}
    </>
  )
}
export default MyApp
