import { useGlobalState } from '@/components/GlobalState'
import { SoundItem } from '@/components/Media/Sounds'
import SoundItemProps from '@/components/Media/Sounds/SoundItem'

type SoundsListProps = {
  sounds: SoundItemProps[]
}

const SoundsList = ({ sounds = [] }: SoundsListProps) => {
  const [currentSoundIndex, setCurrentSoundIndex] = useGlobalState('currentSoundIndex')

  return (
    <div className="w-full flex flex-col relative">
      <div className="w-full flex flex-col lg:min-w-full">
        {sounds.map((sound, index) => (
          <SoundItem key={sound.id.toString()} {...sound} index={index} isActive={currentSoundIndex === index} />
        ))}
      </div>
    </div>
  )
}

export default SoundsList
