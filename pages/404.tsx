import Link from 'next/link'
import Head from 'next/head'
import Logo from '@/components/Logo/Logo'
import { H1, P } from '@/components/basics'
import HeadphoneIcon from '@/components/Icons/Headphone/HeadphoneIcon'
import ImageBackground from '@/components/Background/ImageBackground'

export default function Custom404() {
  return (
    <>
      <Head>
        <>
          <title>Carlota Sounds - Page not full_page_loading_splash_screen_with_nextjs_and</title>
        </>
      </Head>
      <main className="w-screen h-screen relative overflow-hidden">
        <div className="cs-background-image absolute z-20 w-full h-full">
          <ImageBackground imageName={'abstract-calm20.gif'} />
        </div>
        <header className="flex justify-between items-center w-full fixed z-50 p-8">
          <div className="cs-logo cursor">
            <Link href="/" passHref>
              <a>
                <Logo />
              </a>
            </Link>
          </div>
        </header>

        <div className="w-screen h-screen flex flex-initial self-center items-center flex-col justify-center z-10 animate fade-in-2s">
          <div
            className="z-20 flex flex-col justify-center items-center space-y-10 p-8 h-full"
            style={
              {
                // minHeight: '500px',
              }
            }
          >
            <div className="max-w-xl flex flex-col items-center self-center">
              <HeadphoneIcon blocked={true} className={`animate fade-in-infinite`} />
              <H1 text="Unfortunately, you are not having the best reflection now." className="text-3xl font-medium" />

              <P text="The page you are looking was not found (404)." className="text-xl max-w-lg mt-sm" />
            </div>

            <div className="max-w-lg flex flex-col items-center hidden md:flex">
              <P text={`"Knowledge speaks, but wisdom listens."`} className="text-lg md:text-xl" />
              <P text="Jimi Hendrix" className="text-md md:text-lg" />
            </div>

            <div>
              <Link href="/" passHref>
                <a className="underline text-xl lg:text-3xl">{`<- Get back to sound's reflection`}</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
