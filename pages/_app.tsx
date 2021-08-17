import '../styles/globals.css'
import '@/components/Logo/Logo.css'
import '@/components/basics/Typography/Typography.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
