import { useEffect, useState } from 'react'
import { SoundsList } from '../Media/Sounds/Sounds'

const sounds: Array<any> = [
  { id: 1, title: 'Restos do que não aconteceu', time: '02:00', album: 'Single' },
  { id: 2, title: 'Um Fim Ensurdecedor', time: '02:00', album: 'Single' },
  { id: 3, title: 'Epifania', time: '02:00', album: 'Single' },
  { id: 4, title: 'Esperança', time: '02:00', album: 'Esperança' },
]

const Actions = () => {
  // lg:rotate-90 lg:self-start
  return (
    <div
      className="flex flex-row  items-stretch justify-between w-full lg:rotate-90 lg:translate-x-1/4 
      lg:min-w-min
    lg:max-w-xs	
     lg:border-t lg:border-gray-100 lg:border-opacity-25"
    >
      <div>SOUNDS</div>

      <div>ABOUT</div>

      <div>SHARE</div>

      <div>SOCIAL</div>
    </div>
  )
}

const Menu = () => {
  return (
    <>
      <Actions />
      <SoundsList sounds={sounds} />
    </>
  )
}

export default Menu
