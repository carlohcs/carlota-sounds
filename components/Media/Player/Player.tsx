// https://github.com/justinmc/react-audio-player
import ReactAudioPlayer from 'react-audio-player'
import { useGlobalState, sounds, dispatch, ACTIONS } from '@/components/GlobalState'
import { Play, Next, Prev } from '@/components/Media/Player'
import { H1 } from '@/components/basics'
import { useRef } from 'react'
import { useEffect } from 'react'

const Player = () => {
  const [currentSoundIndex] = useGlobalState('currentSoundIndex')
  const [isPlaying] = useGlobalState('isPlaying')
  const [isMuted] = useGlobalState('isMuted')

  const currentSound = sounds.data.find((item, index) => currentSoundIndex === index)
  const fileToPlay = `/sounds/files/${currentSound.file}`
  const reactAudioPlayerRef = useRef<null | ReactAudioPlayer>(null)

  useEffect(() => {
    if (reactAudioPlayerRef && reactAudioPlayerRef.current) {
      let audioElement = reactAudioPlayerRef.current.audioEl.current

      if (audioElement) {
        if (isPlaying) {
          audioElement.play()

          // let playedSeconds = audioElement.duration / audioElement.currentTime

          // dispatch({ type: ACTIONS.PLAYING_PROGRESS, value: playedSeconds })
        } else {
          audioElement.pause()
        }

        // console.log(audioElement)
      }

      // reactAudioPlayerRef.current.audioEl.play()
    }
  }, [isPlaying])

  return (
    <>
      <ReactAudioPlayer
        ref={reactAudioPlayerRef}
        className="react-player"
        src={fileToPlay}
        autoPlay={isPlaying}
        // loop={true}
        muted={isMuted}
        volume={1}
        // onPlay={(data) => console.log('playing', data)}
        // onPause={(data) => console.log('paused', data)}
        // onSeeked={(data) => console.log('onSeeked', data)}
        listenInterval={1000}
        onListen={(listened) => {
          if (reactAudioPlayerRef && reactAudioPlayerRef.current) {
            let audioElement = reactAudioPlayerRef.current.audioEl.current

            if (audioElement) {
              dispatch({ type: ACTIONS.PLAYING_PROGRESS, value: listened })
            }
          }
        }}
        onEnded={() => dispatch({ type: ACTIONS.NEXT })}
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
