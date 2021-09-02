import { useGlobalState } from '@/components/GlobalState'
import { P, Small } from '@/components/basics/Typography/Typography'
import { SoundAlbum } from '@/components/Media/Sounds'

export type SoundItemProps = {
  id: number
  title: string
  time: string
  album: string
  albumImage: string | boolean
  index?: number
  isActive?: boolean
  // key: string
}

const SoundItem = ({
  id = 0,
  title = '',
  time = '',
  album = '',
  albumImage = '',
  index = 0,
  isActive = false,
}: SoundItemProps) => {
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
    // style={{ boxSizing: 'content-box', width: '100%' }}
    // style={{ maxWidth: 'calc(100% - 20px)' }}
  }
  // truncate
  return (
    <div
      className={`max-w-full relative text-left p-md border-b border-gray-100 border-opacity-25 cursor-pointer hover:animate-pulse hover:bg-gray-800 transition duration-200 ease-in flex flex-row ${
        isActive ? 'text-yellow-500 transition-colors !bg-gray-800 !bg-opacity-75' : ''
      }`}
      onClick={onClick}
      data-album={album}
    >
      <div className="block w-12 h-12 md:w-16 md:h-16" style={{ minWidth: '50px' }}>
        <SoundAlbum image={albumImage} name={album} />
      </div>
      <div className="flex-col pl-8 w-full truncate" style={{ flex: 1 }}>
        <P
          text={title}
          className={`pt-xs truncate text-md md:text-lg ${isActive ? 'font-medium' : ''}`}
          // style={{ maxWidth: 'calc(100% - 80px)' }}
        />

        <Small text={time} className="text-xs absolute" />
      </div>
    </div>
  )
}

export default SoundItem
