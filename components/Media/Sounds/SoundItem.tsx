import { dispatch, useGlobalState, ACTIONS } from '@/components/GlobalState'
import { P, Small } from '@/components/basics/Typography/Typography'
import { SoundAlbum } from '@/components/Media/Sounds'
import Image from 'next/image'
import { convertToReducedTime } from '@/components/commons'

export type SoundItemProps = {
  id: number
  title: string
  time: string
  album: string
  albumImage: string | boolean
  index?: number
  className?: string
  // key: string
}

const SoundItem = ({
  id = 0,
  title = '',
  time = '',
  album = '',
  albumImage = '',
  index = 0,
  className = '',
}: SoundItemProps) => {
  const [currentSoundIndex] = useGlobalState('currentSoundIndex')
  const [isPlaying] = useGlobalState('isPlaying')
  const [playingProgress] = useGlobalState('playingProgress')
  const isActive = currentSoundIndex === index
  const isCurrentlyPlayingActive = isActive && isPlaying
  // const onClick = (/*evt: Event*/) => {
  //   // const classes = ['background-album', 'background-epifania', 'background-restos-do-que-nao-aconteceu']
  //   // const $bg = document.querySelector<HTMLElement>('.cs-app-background')
  //   // const currentClasses = ['background-album', `background-${album.toLowerCase()}`]
  //   // if ($bg) {
  //   //   $bg.classList.remove(...classes)
  //   //   $bg.classList.add(...currentClasses)
  //   // }
  //   // style={{ boxSizing: 'content-box', width: '100%' }}
  //   // style={{ maxWidth: 'calc(100% - 20px)' }}
  // }
  // truncate
  return (
    <div
      className={`max-w-full relative text-left p-md border-b border-gray-100 border-opacity-25 cursor-pointer hover:animate-pulse hover:bg-gray-800 transition duration-200 ease-in flex flex-row ${
        isActive ? 'transition-colors !bg-gray-800 !bg-opacity-75' : ''
      } ${className}`}
      onClick={() => dispatch({ type: ACTIONS.PLAY_SOUND, value: index })}
      data-album={album}
    >
      <div className="flex items-center mr-md w-8 justify-center">
        {isCurrentlyPlayingActive ? (
          <Image src="/icons/player/waves.gif" alt="Playing music" width={'100%'} height={'100%'} />
        ) : (
          <Small text={(index + 1).toString()} className="text-sm text-gray-400" />
        )}
      </div>
      <div className="block w-12 h-12 md:w-16 md:h-16" style={{ minWidth: '50px' }}>
        <SoundAlbum image={albumImage} name={album} />
      </div>
      <div className="flex-col pl-8 w-full truncate" style={{ flex: 1 }}>
        <P
          text={title}
          className={`pt-xs truncate text-md md:text-lg ${isActive ? 'text-yellow-500' : ''} ${
            isCurrentlyPlayingActive ? 'font-medium' : ''
          }`}
        />
        <Small text={album} className={`text-xs block text-gray-300 transition-colors`} />

        <div className="flex justify-between max-w-min">
          {isCurrentlyPlayingActive ? (
            <>
              <Small
                text={convertToReducedTime(playingProgress)}
                className={`text-xs block text-gray-300 transition-colors w-lg`}
              />
              <Small text="/" className={`text-xs block text-gray-300 transition-colors w-6 text-center`} />
              <Small text={time} className={'text-xs block text-gray-300 transition-colors'} />
            </>
          ) : (
            <Small text={time} className={'text-xs block text-gray-300 transition-colors'} />
          )}
        </div>
      </div>
    </div>
  )
}

export default SoundItem
