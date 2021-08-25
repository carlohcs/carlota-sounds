import '../styles/globals.css'
import '@/components/Logo/Logo.css'
import '@/components/basics/Typography/Typography.css'
import type { AppProps } from 'next/app'
import { Splash } from '@/components/Splash/Splash'
// import LoadingScreen from '@/components/LoadingScreen'

// https://www.reddit.com/r/nextjs/comments/nqjs8r/full_page_loading_splash_screen_with_nextjs_and/
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Splash>
      <Component {...pageProps} />
    </Splash>
  )
}
export default MyApp
