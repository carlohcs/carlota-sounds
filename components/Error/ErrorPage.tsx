import Link from 'next/link'
import Head from 'next/head'
import Logo from '@/components/Logo/Logo'
import { H1, P } from '@/components/basics'
import HeadphoneIcon from '@/components/Icons/Headphone/HeadphoneIcon'
import ImageBackground from '@/components/Background/ImageBackground'
import { getPropValue } from '@/components/commons'

type ErrorPageProps = {
  errorCode: number
}

export default function ErrorPage({ errorCode }: ErrorPageProps) {
  const errorsPros = {
    404: {
      title: 'Page not found',
      h1: 'Unfortunately, you are not having the best reflection now.',
      p: 'The page you are looking was not found (404).',
    },
    500: {
      title: 'Server error',
      h1: 'Unfortunately, you are not having the best reflection now.',
      p: 'The server encountered an error (500).',
    },
  }

  const currentText = getPropValue(errorCode.toString(), errorsPros)

  return (
    <>
      <Head>
        <>
          <title>{getPropValue('title', currentText)} | Carlota Sounds</title>
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
          <div className="z-20 flex flex-col justify-center items-center space-y-10 p-8 h-full">
            <div className="max-w-xl flex flex-col items-center self-center">
              <HeadphoneIcon blocked={true} className={`animate fade-in-infinite`} />

              <H1 text={getPropValue('h1', currentText)} className="text-3xl font-medium" />
              <P text={getPropValue('p', currentText)} className="text-xl max-w-lg mt-sm" />
            </div>

            <div className="max-w-lg flex flex-col items-center hidden md:flex">
              <P text={`"Knowledge speaks, but wisdom listens."`} className="text-lg md:text-xl" />
              <P text="Jimi Hendrix" className="text-md md:text-lg" />
            </div>

            <div>
              <Link href="/" passHref>
                <a className="underline text-xl lg:text-3xl">{`<- Go back to sound reflections`}</a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
