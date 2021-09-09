import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Logo from '@/components/Logo/Logo'
import Canvas from '@/components/Canvas/Canvas'
import ToggleMenu from '@/components/Header/ToggleMenu'
import Menu from '@/components/Header/Menu'
import DandelionIcon from '@/components/Icons/Dandelion/DandelionIcon'
import { run as runBubles } from '@/components/Canvas/bubbles'
// import { run as runPixelRainbow } from '@/components/Canvas/PixelRainbow'
// import { run as runParticleSmoke } from '@/components/Canvas/ParticleSmoke'
import { run as runWaves } from '@/components/Canvas/waves/runWaves'
import { Player, Mute } from '@/components/Media/Player'
import { useGlobalState } from '@/components/GlobalState'

import VideoBackground from '@/components/Background/VideoBackground'
import ImageBackground from '@/components/Background/ImageBackground'
import ExperienceMenu from '@/components/Footer/ExperienceToggleMenu'
import { Footer } from '@/components/Footer'

const Home: NextPage = () => {
  // https://dev.to/gabrielrufino/react-hook-usestate-in-typescript-4mn6
  // const [stage, setStage] = useState<string>('loading')

  const [closed, setClosed] = useState(true)
  const [firstCall, setFirstCall] = useState(false)

  // VIEWS
  const [waves, setWaves] = useGlobalState('waves')
  const [bubbles, setBubbles] = useGlobalState('bubbles')
  const [background, setBackground] = useGlobalState('background')

  const currentClassName = `${firstCall ? 'animate' : ''} ${!closed ? 'slide-out-right' : 'slide-in-right'}`

  const handleToggle = (isClosed: boolean) => {
    if (!firstCall) {
      setFirstCall(true)
    }

    setClosed(isClosed)
  }

  const calcTabWidth = () => {
    const windowWidth: number = document.body.clientWidth

    if (windowWidth > 1024) {
      return window.innerWidth / 3
    } else if (windowWidth >= 768) {
      return window.innerWidth / 2
    }

    return 'inherit'
  }
  const [tabWidth, setTabWidth] = useState<number | string>(calcTabWidth())

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTabWidth(calcTabWidth())
    })
  }, [setTabWidth])

  return (
    <>
      <Head>
        <title>Carlota Sounds</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen relative overflow-hidden">
        <header className="flex justify-between items-center w-full fixed z-50 p-8">
          <div className="cursor-pointer">
            <Logo />
          </div>
          <div className="flex justify-center items-center self-center">
            <ToggleMenu handleToggle={handleToggle} />
          </div>
        </header>

        <div className="wrapper relative w-full h-full flex justify-center items-center">
          <div
            className={`cs-wrapper__menu w-full h-full absolute z-40 flex flex-col justify-start items-start pt-18 backdrop-blur-md bg-gray-900 bg-opacity-20 ${currentClassName}`}
            style={{
              willChange: 'transform',
              transform: 'translateX(100vw)',
              right: 0,
              width: tabWidth,
            }}
          >
            <Menu />
          </div>
          {/* <div className="absolute z-20 w-full h-full">{<VideoBackground />}</div> */}

          {/* <div className="cs-canvas absolute z-20"><Canvas canvasCallback={runParticleSmoke} /></div> */}
          {background ? (
            <div className="absolute z-20 cs-image w-full h-full">
              <ImageBackground imageName="abstract-calm10.gif" />
            </div>
          ) : (
            ''
          )}

          {waves ? (
            <div className="cs-canvas absolute z-20 cs-waves">
              <Canvas canvasCallback={runWaves} />
            </div>
          ) : (
            ''
          )}

          {bubbles ? (
            <div className="cs-canvas absolute z-20 cs-bubbles">
              <Canvas canvasCallback={runBubles} />
            </div>
          ) : (
            ''
          )}
          <div className="w-full h-full absolute z-30 flex justify-center items-center">
            <div className="cs-dandelion">
              <DandelionIcon className="animate scale-dandelion-out" />
            </div>
          </div>
          <div className="hidden lg:block absolute inset-y-1/2 right-8 p-8 z-30 text-left opacity-10 hover:opacity-100 transition-opacity">
            <div
              className="text-base space-y-6"
              style={
                {
                  // writingMode: 'vertical-rl',
                  // textOrientation: 'upright',
                }
              }
            >
              Try it!
              <ExperienceMenu />
            </div>
          </div>

          <div className="cs-player absolute z-30 flex flex-col justify-center items-center px-8 self-end mb-10 md:mb-16">
            <Player />
          </div>
        </div>

        <footer className="hidden lg:flex absolute bottom-1 flex flex-row justify-between items-center w-full absolute md:px-8 xl:p-8">
          <div className="z-30">
            <div className="cs-player__actions__mute w-14 h-14">
              <Mute />
            </div>
          </div>
          <div className="z-30 text-base max-w-lg opacity-50 hover:opacity-100 transition-opacity">
            <Footer />
          </div>
        </footer>
      </main>
    </>
  )
}

export default Home
