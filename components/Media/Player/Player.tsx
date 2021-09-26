import { useGlobalState, sounds, dispatch, ACTIONS } from '@/components/GlobalState'
import { Play, Next, Prev } from '@/components/Media/Player'
import { H1 } from '@/components/basics'
import { useEffect, useState } from 'react'

const Player = () => {
  const [currentSoundIndex] = useGlobalState('currentSoundIndex')
  const [isPlaying] = useGlobalState('isPlaying')
  const [isMuted] = useGlobalState('isMuted')
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const currentSound = sounds.data.find((item, index) => currentSoundIndex === index)

  // On play or pause
  useEffect(() => {
    if (process.browser) {
      if (isPlaying) {
        setIsPageLoaded(true)
        window.CSSound.play()
      } else {
        window.CSSound.pause()
      }
    }
  }, [isPlaying])

  // When user select a song
  useEffect(() => {
    if (process.browser) {
      if (isPageLoaded) {
        window.CSSound.playByIndex(currentSoundIndex)
      }
    }
  }, [currentSoundIndex, isPageLoaded])

  // Mute sound
  useEffect(() => {
    if (process.browser) {
      window.CSSound.toggleMute(isMuted)
    }
  }, [isMuted])

  // Sound progress / on en ended
  useEffect(() => {
    if (process.browser) {
      const progressTimeCallback = (time: number) => {
        let localCSSound = window.CSSound.sound

        dispatch({ type: ACTIONS.PLAYING_PROGRESS, value: time })

        if(localCSSound.bufferSourceNode && localCSSound.bufferSourceNode.buffer) {
          
          let duration = localCSSound.bufferSourceNode.buffer.duration

          if(Math.floor(time) === Math.floor(duration)) {
            dispatch({ type: ACTIONS.NEXT })    
          }
        }
      }

      window.CSSound.subscribeProgressTime(progressTimeCallback)
    }
  })

  return (
    <>
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
