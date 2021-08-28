import { P, Small } from '@/components/basics/Typography/Typography'

type SoundItemProps = {
  id: number
  title: string
  time: string
  album: string
  // key: string
}

export const SoundItem = ({ title = '', time = '', album = '' }) => {
  const onClick = (/*evt: Event*/) => {
    const classes = ['background-album', 'background-epifania']
    const $bg = document.querySelector<HTMLElement>('.cs-app-background')

    const currentClasses = ['background-album', `background-${album.toLowerCase()}`]

    if ($bg) {
      $bg.classList.remove(...classes)
      $bg.classList.add(...currentClasses)
    }
  }

  return (
    <div
      className="text-left py-sm border-b border-gray-100 border-opacity-25 cursor-pointer"
      onClick={onClick}
      data-album={album}
    >
      <P text={title} className="text-lg" />
      <div>
        <Small text={time} className="text-xs" />
      </div>

      {/* {album} */}
    </div>
  )
}

type SoundsListProps = {
  sounds: SoundItemProps[]
}

export const SoundsList = ({ sounds = [] }: SoundsListProps) => {
  return (
    <div className="w-full flex flex-col lg:min-w-full">
      {sounds.map((sound) => (
        <SoundItem key={sound.id.toString()} {...sound} />
      ))}
    </div>
  )
}
