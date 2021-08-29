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
import { run as runParticleSmoke } from '@/components/Canvas/ParticleSmoke'
import { Play, Next, Prev } from '@/components/Media/Controls'
import sounds from '../public/sounds/sounds.json'
import { useGlobalState } from '@/components/GlobalState'
import { H1 } from '@/components/basics'

const Home: NextPage = () => {
  // https://dev.to/gabrielrufino/react-hook-usestate-in-typescript-4mn6
  // const [stage, setStage] = useState<string>('loading')

  const [closed, setClosed] = useState(true)
  const [firstCall, setFirstCall] = useState(false)
  const [currentSoundIndex, setCurrentSoundIndex] = useGlobalState('currentSoundIndex')
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

      <main className="w-screen h-screen relative" style={{ backfaceVisibility: 'hidden' }}>
        <header className="flex justify-between align-center w-full fixed z-50 p-8">
          <div className="cursor-pointer">
            <Logo />
          </div>
          <div className="flex justify-center items-center self-center">
            <ToggleMenu handleToggle={handleToggle} />
          </div>
        </header>

        <div className="wrapper relative w-screen h-screen">
          <div
            className={`w-full h-full md:max-w-min absolute p-nano bg-black z-40 ${currentClassName} flex flex-col justify-start items-start p-md lg:px-lg pt-18`}
            style={{ willChange: 'transform', transform: 'translateX(100vw)', right: 0, minWidth: '30%' }}
          >
            <Menu />
          </div>
          <div className="cs-canvas absolute z-20">{/* <Canvas canvasCallback={runParticleSmoke} /> */}</div>
          <div className="cs-canvas absolute z-20">
            <Canvas canvasCallback={runBubles} />
          </div>
          <div className="relative z-30 flex flex-col justify-center items-center h-full">
            <div className="cs-dandelion">
              <DandelionIcon className="animate scale-dandelion-out" />
            </div>
            <div>
              <H1 text={currentSound ? currentSound.title : ''} />
            </div>
            <div className="cs-player p-8">
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
        </div>
      </main>
    </>
  )
}

export default Home
