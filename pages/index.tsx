import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import LoadingScreen from '@/components/LoadingScreen'
import { styled } from '../stiches.config'
import Logo from '@/components/Logo/Logo'

// https://css-tricks.com/scale-svg/
// const Main = styled('div', {})

const Home: NextPage = () => {
  // https://dev.to/gabrielrufino/react-hook-usestate-in-typescript-4mn6
  const [stage, setStage] = useState<string>('loading')

  // const changeBg = setTimeout(() => {
  //   setStage('loaded')
  //   clearTimeout(changeBg)
  // }, 3000)

  // https://blog.logrocket.com/how-to-use-svgs-in-react/
  return (
    <>
      <Head>
        <title>Loading | Carlota Sounds</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <Logo />
        <LoadingScreen stage={stage} />
      </main>
    </>
  )
}

export default Home
