import { useGlobalState } from '@/components/GlobalState'
import { SoundItem } from '@/components/Media/Sounds'
import { SoundItemProps } from '@/components/Media/Sounds/SoundItem'
import { useEffect, useState } from 'react'
import { scrollTo, createMarkup } from '@/components/commons'
import { Small } from '@/components/basics/Typography/Typography'
import { event as gtagEvent } from '@/libs/gtag'

type SoundsListProps = {
  sounds: SoundItemProps[]
}

const SoundsList = ({ sounds = [] }: SoundsListProps) => {
  const [currentSoundIndex] = useGlobalState('currentSoundIndex')
  const [menuOpened] = useGlobalState('menuOpened')
  const [wasLoaded, setWasLoaded] = useState(false)

  useEffect(() => {
    const currentSoundItem = document.querySelector(`.cs-sound-${currentSoundIndex}`) as HTMLElement

    if (currentSoundIndex !== 0 && !wasLoaded) {
      setWasLoaded(true)
    }

    // https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move
    if (currentSoundItem) {
      if (wasLoaded) {
        // Prevent weird bug:
        // Menu closed
        // user play a song
        // occours: menu is opened and the screen move to left
        if (menuOpened) {
          setTimeout(() => {
            const tabContainer = document.querySelector('.cs-tab-container') as HTMLElement
            const soundItemOffset = currentSoundItem.offsetTop
            scrollTo(tabContainer, soundItemOffset, 600)
          }, 50)
        }
      }
    }
  }, [currentSoundIndex, wasLoaded, menuOpened])

  return (
    <div className="w-full flex flex-col relative">
      <div className="w-full flex flex-col lg:min-w-full">
        {sounds.map((sound, index) => (
          <SoundItem key={index.toString()} {...sound} index={index} className={`cs-sound-${index}`} />
        ))}
        <div
          className="max-w-full text-center p-sm"
          onClick={() => {
            gtagEvent({
              category: 'Sounds',
              action: 'Clique',
              label: 'Coming soon',
            })
          }}
        >
          <Small text="More coming soon" className="text-base" />
          <span dangerouslySetInnerHTML={createMarkup('&#129310;')} />
        </div>
      </div>
    </div>
  )
}

export default SoundsList
