import { useState } from 'react'
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
import { Play, Next, Prev, Mute } from '@/components/Media/Controls'
import sounds from '../public/sounds/sounds.json'
import { useGlobalState } from '@/components/GlobalState'
import { H1 } from '@/components/basics'
import VideoBackground from '@/components/Background/VideoBackground'
import ImageBackground from '@/components/Background/ImageBackground'

const Home: NextPage = () => {
  // https://dev.to/gabrielrufino/react-hook-usestate-in-typescript-4mn6
  // const [stage, setStage] = useState<string>('loading')

  const [closed, setClosed] = useState(true)
  const [firstCall, setFirstCall] = useState(false)
  const [currentSoundIndex, setCurrentSoundIndex] = useGlobalState('currentSoundIndex')

  // VIEWS
  const [waves, setWaves] = useGlobalState('waves')
  const [bubbles, setBubbles] = useGlobalState('bubbles')
  const [background, setBackground] = useGlobalState('background')

  const currentClassName = `${firstCall ? 'animate' : ''} ${!closed ? 'slide-out-right' : 'slide-in-right'}`

  const currentSound = sounds.data.find((item, index) => currentSoundIndex === index)

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

      <main className="w-screen h-screen relative">
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
            className={`cs-wrapper__menu w-full h-full md:max-w-min absolute z-40 flex flex-col justify-start items-start pt-18 backdrop-blur-md bg-gray-900 bg-opacity-20 ${currentClassName}`}
            style={{ willChange: 'transform', transform: 'translateX(100vw)', right: 0, minWidth: '30%' }}
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

          <div className="cs-player absolute z-30 flex flex-col justify-center items-center px-8 self-end mb-10 md:mb-16">
            <H1 className="text-xl md:text-3xl mb-10 drop-shadow-2xl" text={currentSound ? currentSound.title : ''} />
            <div className="cs-player__actions w-full flex flex-row justify-between items-center">
              <div className="cs-player__actions__prev w-14 h-14">
                <Prev />
              </div>
              <div className="w-16 h-16">
                <Play />
              </div>
              <div className="w-14 h-14">
                <Next />
              </div>
            </div>
          </div>
        </div>

        <footer className="hidden md:flex absolute bottom-1 flex flex-row justify-between items-center w-full absolute p-8">
          <div className="z-30">
            <div className="cs-player__actions__mute w-14 h-14">
              <Mute />
            </div>
          </div>
          <div className="z-30 text-base max-w-sm text-right">
            <div>
              <label>
                <input type="checkbox" />
                Waves
              </label>
              <label>
                <input type="checkbox" />
                Bubbles
              </label>
              <label>
                <input type="checkbox" />
                Background
              </label>
            </div>
            <div>
              Availabe on{' '}
              <a href="https://open.spotify.com/artist/4Kv6CaJSSTkaD9QHgjvrIn" className="underline">
                Spotify
              </a>
              , <a>Deezer</a>,{' '}
              <a href="https://www.youtube.com/c/CarlosHenriqueCarvalhodeSantana/videos" className="underline">
                Youtube
              </a>{' '}
              and all streaming platform.
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default Home
