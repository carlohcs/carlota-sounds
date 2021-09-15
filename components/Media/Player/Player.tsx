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
  let pathFileToPlay = '/sounds/files/'
  const fileToPlay = currentSound?.file
  const reactAudioPlayerRef = useRef<null | ReactAudioPlayer>(null)

  // When a source changes, the player doesn't update
  // it's necessary call "audio.load" to load the current audio
  useEffect(() => {
    if (reactAudioPlayerRef && reactAudioPlayerRef.current) {
      let audioElement = reactAudioPlayerRef.current.audioEl.current

      if (audioElement) {
        audioElement.load()
      }
    }
  }, [currentSoundIndex])

  useEffect(() => {
    if (reactAudioPlayerRef && reactAudioPlayerRef.current) {
      let audioElement = reactAudioPlayerRef.current.audioEl.current

      if (audioElement) {
        if (isPlaying) {
          audioElement.play()
        } else {
          audioElement.pause()
        }
      }
    }
  }, [isPlaying])

  const AudioSources = () => {
    return (
      <>
        {[
          { extension: 'ogg', type: 'application/ogg' },
          { extension: 'mp3', type: 'audio/mpeg' },
        ].map((curExtension, key) => (
          <source
            src={`${pathFileToPlay}/${curExtension.extension}/${fileToPlay}.${curExtension.extension}`}
            type={curExtension.type}
            key={key}
          />
        ))}
      </>
    )
  }

  return (
    <>
      <ReactAudioPlayer
        ref={reactAudioPlayerRef}
        className="react-player"
        preload="none"
        // src={fileToPlay}
        autoPlay={isPlaying}
        // loop={true}
        muted={isMuted}
        volume={1}
        // onPlay={(data) => console.log('playing', data)}
        // onPause={(data) => console.log('paused', data)}
        // onSeeked={(data) => console.log('onSeeked', data)}
        listenInterval={1000}
        // onAbort={(data) => console.log(data)}
        onLoadedMetadata={() => dispatch({ type: ACTIONS.PLAYING_PROGRESS, value: 0 })}
        onListen={(listened) => {
          if (reactAudioPlayerRef && reactAudioPlayerRef.current) {
            let audioElement = reactAudioPlayerRef.current.audioEl.current

            if (audioElement) {
              // if (parseInt(listened.toFixed(2)) > 0) {
              dispatch({ type: ACTIONS.PLAYING_PROGRESS, value: listened })
              // }
            }
          }
        }}
        // children={audioSources}
        onEnded={() => dispatch({ type: ACTIONS.NEXT })}
      >
        <AudioSources />
      </ReactAudioPlayer>
      <H1 className="text-xl md:text-3xl mb-10 drop-shadow-2xl" text={currentSound ? currentSound.title : ''} />
      <div className="cs-player__actions w-full flex flex-row justify-between items-center">
        <div className="w-14 h-14">
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
