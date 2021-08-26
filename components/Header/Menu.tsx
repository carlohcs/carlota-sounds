import { useEffect, useState } from 'react'
import { SoundsList } from '../Media/Sounds/Sounds'

const sounds: Array<any> = [{ id: 1, title: 'Restos do que não aconteceu', time: '02:00', album: 'Single' }]

const Actions = () => {
  return (
    <div className="flex flex-row flex-auto items-stretch items-center justify-between">
      <div>SOUNDS</div>

      <div>ABOUT</div>

      <div>SHARE</div>

      <div>SOCIAL</div>
    </div>
  )
}

const Menu = () => {
  return (
    <div className="w-full">
      <Actions />
      <SoundsList sounds={sounds} />
    </div>
  )
}

export default Menu
