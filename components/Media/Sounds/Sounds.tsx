import React from 'react'

interface SoundItemProps {
  id: number
  title: string
  time: string
  album: string
  key: {}
  // children: JSX.Element[] | JSX.Element
}

// React.ReactElement<SoundItemProps>
export const SoundItem: React.FC<SoundItemProps> = ({ title, time, album }) => {
  return (
    <>
      {title}
      {time}
      {album}
    </>
  )
}

// interface SoundItemsProps extends Array<SoundItemProps> {}

type SoundsListProps = {
  sounds: SoundItemProps[]
  // [index: string]: string
  // key: number
}

export const SoundsList = ({ sounds = [] }: SoundsListProps) => {
  return (
    <>
      {sounds.map((sound) => (
        <div key={sound.id}>{sound.title}</div>
        // <SoundItem /> não funciona: missing {key: number}
      ))}
    </>
  )
}
