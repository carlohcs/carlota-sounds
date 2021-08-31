import { P, Small } from '@/components/basics/Typography/Typography'
import { useGlobalState } from '@/components/GlobalState'

type SoundItemProps = {
  id: number
  title: string
  time: string
  album: string
  index?: number
  isActive?: boolean
  // key: string
}

export const SoundItem = ({ id = 0, title = '', time = '', album = '', index = 0, isActive = false }) => {
  const [currentSoundIndex, setCurrentSoundIndex] = useGlobalState('currentSoundIndex')

  const onClick = (/*evt: Event*/) => {
    setCurrentSoundIndex(index)

    // const classes = ['background-album', 'background-epifania', 'background-restos-do-que-nao-aconteceu']
    // const $bg = document.querySelector<HTMLElement>('.cs-app-background')

    // const currentClasses = ['background-album', `background-${album.toLowerCase()}`]

    // if ($bg) {
    //   $bg.classList.remove(...classes)
    //   $bg.classList.add(...currentClasses)
    // }
  }

  return (
    <div
      className={`text-left p-md border-b border-gray-100 border-opacity-25 cursor-pointer hover:animate-pulse hover:bg-gray-800 transition duration-200 ease-in ${
        isActive ? 'text-yellow-500 transition-colors !bg-gray-800 !bg-opacity-75' : ''
      }`}
      onClick={onClick}
      data-album={album}
    >
      <P text={title} className={`text-lg ${isActive ? 'font-medium' : ''}`} />
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
  const [currentSoundIndex, setCurrentSoundIndex] = useGlobalState('currentSoundIndex')

  return (
    <div className="w-full flex flex-col lg:min-w-full">
      {sounds.map((sound, index) => (
        <SoundItem key={sound.id.toString()} {...sound} index={index} isActive={currentSoundIndex === index} />
      ))}
    </div>
  )
}
