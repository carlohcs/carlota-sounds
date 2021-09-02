// https://github.com/cookpete/react-player
import ReactPlayer from 'react-player'
import { useGlobalState, sounds } from '@/components/GlobalState'
import { Play, Next, Prev, Mute } from '@/components/Media/Player'
import { H1 } from '@/components/basics'

const Player = () => {
  const [currentSoundIndex, setCurrentSoundIndex] = useGlobalState('currentSoundIndex')
  const [isPlaying, setIsPlaying] = useGlobalState('isPlaying')
  const [isMuted, setIsMuted] = useGlobalState('isMuted')

  const currentSound = sounds.data.find((item, index) => currentSoundIndex === index)
  const fileToPlay = [{
    src: `/sounds/files/${currentSound.file}`,
    type: `audio/${currentSound.file.split('.')[1]}`,
  }]

  // const soundFiles = sounds.data.map((sound) => ({
  //   src: `/sounds/files/${sound.file}`,
  //   type: `audio/${sound.file.split('.')[1]}`,
  // }))
  // console.log({ soundFiles })
  return (
    <>
      <ReactPlayer
        className="react-player"
        url={fileToPlay}
        playing={isPlaying}
        loop={true}
        muted={isMuted}
        volume={1}
        width="0"
        height="0"
      />
      <H1 className="text-xl md:text-3xl mb-10 drop-shadow-2xl" text={currentSound ? currentSound.title : ''} />
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
    </>
  )
}

export default Player
