import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import useInterval from '@/hooks/useInterval.hook'
import type { NextPage } from 'next'
import Logo from '@/components/Logo/Logo'
import Canvas from '@/components/Canvas/Canvas'
import DandelionIcon from '@/components/Icons/Dandelion/DandelionIcon'
import { run as runBubles } from '@/components/Canvas/bubbles'
import { useGlobalState, sounds } from '@/components/GlobalState'
import ImageBackground from '@/components/Background/ImageBackground'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

// import { run as runPixelRainbow } from '@/components/Canvas/PixelRainbow'
// import { run as runParticleSmoke } from '@/components/Canvas/ParticleSmoke'
// import { run as runWaves } from '@/components/Canvas/waves/runWaves'
// import VideoBackground from '@/components/Background/VideoBackground'

// Lazy components
// https://nextjs.org/docs/advanced-features/dynamic-import
const Player = dynamic(() => import('@/components/Media/Player').then(module => module.Player) as any)
const Mute = dynamic(() => import('@/components/Media/Player').then(module => module.Mute) as any)
const Menu = dynamic(() => import('@/components/Header/Menu'))
const Footer = dynamic(() => import('@/components/Footer/Footer'))
const ToggleMenu = dynamic(() => import('@/components/Header/ToggleMenu'))
const ExperienceMenu = dynamic(() => import('@/components/Footer/ExperienceToggleMenu'))

const Home: NextPage = () => {
  // https://dev.to/gabrielrufino/react-hook-usestate-in-typescript-4mn6
  // const [stage, setStage] = useState<string>('loading')

  const [menuOpened] = useGlobalState('menuOpened')
  const [firstCall, setFirstCall] = useState(false)

  useEffect(() => {
    if (menuOpened && !firstCall) {
      setFirstCall(true)
    }
  }, [menuOpened, firstCall])

  // VIEWS
  const [waves] = useGlobalState('waves')
  const [bubbles] = useGlobalState('bubbles')
  const [background] = useGlobalState('background')
  const [isPlaying] = useGlobalState('isPlaying')
  const [currentSoundIndex] = useGlobalState('currentSoundIndex')

  const currentClassName = `${firstCall ? 'animate' : ''} ${menuOpened ? 'slide-out-right' : 'slide-in-right'}`

  const calcTabWidth = () => {
    const windowWidth: number = document.body.clientWidth

    if (windowWidth > 1024) {
      return 560
    } else if (windowWidth >= 768) {
      return 384
    }

    return 'inherit'
  }
  const [tabWidth, setTabWidth] = useState<number | string>(calcTabWidth())

  useEffect(() => {
    window.addEventListener('resize', () => {
      setTabWidth(calcTabWidth())
    })
  }, [setTabWidth])

  const [backgroundImageName, setBackgroundImageName] = useState('abstract-calm10.gif')
  const [backgroundImageCounter, setBackgroundImageCounter] = useState(1)
  const totalBackgroundImages = 21
  const backgroundDelay = 20000

  useEffect(() => {
    if (isPlaying) {
      if (background) {
        setBackgroundImageName(`abstract-calm${backgroundImageCounter}.gif`)
      } else {
        setBackgroundImageName(sounds.data[currentSoundIndex].backgroundImage)
      }
    }
  }, [backgroundImageCounter, isPlaying, currentSoundIndex, background])

  useInterval(() => {
    if (background) {
      let currentCounter = Math.round(Math.random() * totalBackgroundImages)

      if (currentCounter === 0) {
        currentCounter = Math.round(Math.random() * totalBackgroundImages)
      }

      // backgroundImageCounter >= totalBackgroundImages
      setBackgroundImageCounter(currentCounter)
    }
  }, backgroundDelay)

  return (
    <>
      <Head>
        <>
          <title>A reflection of sounds | Carlota Sounds</title>
        </>
      </Head>
      <main className="w-screen h-screen relative overflow-hidden">
        <header className="flex justify-between items-center w-full fixed z-50 p-8">
          <div className="cs-logo">
            <Logo />
          </div>
          <div className="flex justify-center items-center self-center">
            <ToggleMenu />
          </div>
        </header>

        <div className="wrapper relative w-screen h-screen flex justify-center items-center overflow-hidden">
          <div
            className={`cs-wrapper__menu w-screen h-screen absolute z-40 flex flex-col justify-start items-start pt-18 backdrop-blur-md bg-black bg-opacity-20 ${currentClassName}`}
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
          {/* isPlaying */}

          <SwitchTransition mode="out-in">
            <CSSTransition
              key={backgroundImageName}
              addEndListener={(node: HTMLElement, done: any) => {
                node.addEventListener('transitionend', done, false)
              }}
              classNames="image-transition"
            >
              <div className="cs-background-image absolute z-20 cs-image w-full h-full">
                <ImageBackground imageName={backgroundImageName} />
              </div>
            </CSSTransition>
          </SwitchTransition>

          {/* {waves ? (
            <div className="cs-canvas absolute z-20 cs-waves">
              <Canvas canvasCallback={runWaves} />
            </div>
          ) : (
            ''
          )} */}

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
          <div className="hidden lg:block absolute inset-y-1/2 right-8 p-8 z-30 text-left opacity-40 hover:opacity-100 transition-opacity">
            <div className="text-base space-y-6">
              Improve your experience!
              <ExperienceMenu />
            </div>
          </div>

          <div className="cs-player absolute z-30 flex flex-col justify-center items-center px-8 self-end pb-14">
            <Player />
          </div>
        </div>

        <footer className="hidden lg:flex absolute bottom-1 flex flex-row justify-between items-center w-full absolute md:px-8 xl:p-8">
          <div className="cs-cs-player__actions__mute w-14 h-14 z-30">
            <Mute />
          </div>

          <div className="z-30 text-base max-w-md pr-sm text-right opacity-50 hover:opacity-100 transition-opacity">
            <Footer />
          </div>
        </footer>
      </main>
    </>
  )
}

export default Home
