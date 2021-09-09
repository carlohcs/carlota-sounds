import { useGlobalState } from '@/components/GlobalState'
import { SoundItem } from '@/components/Media/Sounds'
import SoundItemProps from '@/components/Media/Sounds/SoundItem'
import { useEffect, useState } from 'react'

type SoundsListProps = {
  sounds: SoundItemProps[]
}

const SoundsList = ({ sounds = [] }: SoundsListProps) => {
  const [currentSoundIndex, setCurrentSoundIndex] = useGlobalState('currentSoundIndex')
  const [wasLoaded, setWasLoaded] = useState(false)

  useEffect(() => {
    const currentSoundItem = document.querySelector(`.cs-sound-${currentSoundIndex}`)

    if (currentSoundIndex !== 0 && !wasLoaded) {
      setWasLoaded(true)
    }

    // https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move
    if (currentSoundItem) {
      if (wasLoaded) {
        currentSoundItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          // inline: 'start',
        })
      }
    }
  }, [currentSoundIndex, wasLoaded])

  return (
    <div className="w-full flex flex-col relative">
      <div className="w-full flex flex-col lg:min-w-full">
        {sounds.map((sound, index) => (
          <SoundItem
            key={sound.id.toString()}
            {...sound}
            index={index}
            isActive={currentSoundIndex === index}
            className={`cs-sound-${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default SoundsList
