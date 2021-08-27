import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '@/components/Logo/Logo'
import Canvas from '@/components/Canvas/Canvas'
import ToggleMenu from '@/components/Header/ToggleMenu'
import Menu from '@/components/Header/Menu'

const Home: NextPage = () => {
  // https://dev.to/gabrielrufino/react-hook-usestate-in-typescript-4mn6
  // const [stage, setStage] = useState<string>('loading')

  const [closed, setClosed] = useState(true)
  const [firstCall, setFirstCall] = useState(false)
  const currentClassName = `${firstCall ? 'animate' : ''} ${!closed ? 'slide-out-right' : 'slide-in-right'}`

  const handleToggle = (isClosed: boolean) => {
    if (!firstCall) {
      setFirstCall(true)
    }

    setClosed(isClosed)
  }

  return (
    <>
      <Head>
        <title>Carlota Sounds</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen relative" style={{ backfaceVisibility: 'hidden' }}>
        <header className="flex justify-between align-center w-full fixed z-30 p-md">
          <div className="cursor-pointer">
            <Logo />
          </div>
          <div className="flex justify-between self-center cursor-pointer">
            <ToggleMenu handleToggle={handleToggle} />
          </div>
        </header>

        <div className="wrapper relative w-screen h-screen">
          <div className="absolute z-20">
            <Canvas />
          </div>
          {/* lg:flex-row lg:justify-stretch */}
          <div
            className={`w-full h-full md:max-w-min absolute p-nano bg-black z-20 ${currentClassName} p-md flex flex-col justify-start items-start pt-18`}
            style={{ willChange: 'transform', transform: 'translateX(100vw)', right: 0, minWidth: '30%' }}
          >
            <Menu />
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
