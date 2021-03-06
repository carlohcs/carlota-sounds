import SVG from '@/components/SVG/SVG'
import { dispatch, useGlobalState, ACTIONS, sounds } from '@/components/GlobalState'
import { snakeCase } from '@/components/commons'
import { event as gtagEvent } from '@/libs/gtag'

type ControlProps = {
  elementName: string
  className?: string
}

// type ControlElementsKey = {
//   prev: string
//   next: string
//   play: string
// }

// https://mariusschulz.com/blog/keyof-and-lookup-types-in-typescript
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const Control = ({ elementName, className }: ControlProps) => {
  const [isPlaying] = useGlobalState('isPlaying')
  const [isMuted] = useGlobalState('isMuted')
  const [currentSoundIndex] = useGlobalState('currentSoundIndex')
  const currentSound = sounds.data.find((item, index) => currentSoundIndex === index)

  let currentConfig: any

  const elementConfigs = {
    prev: {
      file: 'prev-next.svg',
      className: 'rotate-180',
      title: 'Previous',
      fn: () => {
        dispatch({ type: ACTIONS.PREV })
      },
    },
    next: {
      file: 'prev-next.svg',
      title: 'Next',
      fn: () => {
        dispatch({ type: ACTIONS.NEXT })
      },
    },
    play: {
      file: isPlaying ? 'pause.svg' : 'play.svg',
      className: `bg-gray-800 ${isPlaying ? '' : 'animate-pulse'}`,
      title: isPlaying ? 'Pause' : 'Play',
      fn: () => {
        dispatch({ type: isPlaying ? ACTIONS.PAUSE : ACTIONS.PLAY })
      },
    },
    mute: {
      file: isMuted ? 'muted.svg' : 'unmuted.svg',
      className: isMuted ? 'bg-gray-800 animate-pulse' : '',
      title: isMuted ? 'Unmute' : 'Mute',
      fn: () => {
        dispatch({ type: isMuted ? ACTIONS.UNMUTE : ACTIONS.MUTE })
      },
    },
  }

  // TypeScript - ts(7053) : Element implicitly has an 'any' type because expression of type 'string' can't be used to index
  // https://stackoverflow.com/questions/41993515/access-object-key-using-variable-in-typescript
  const keyTyped = elementName as keyof typeof elementConfigs
  currentConfig = elementConfigs[keyTyped]
  // currentConfig = prop(elementConfigs, 'prev')

  return (
    <div
      id={`player-${snakeCase(elementName)}`}
      className={`cs-player__actions__${elementName} ${className} cursor-pointer hover:bg-gray-900 hover:animate-pulse hover:transition-colors rounded-full ${currentConfig.className}`}
      onClick={() => {
        gtagEvent({
          category: 'Player',
          action: currentConfig.title ? currentConfig.title : elementName,
          label: currentSound?.title,
        })
        currentConfig.fn()
      }}
      title={`${currentConfig.title ? currentConfig.title : elementName}`}
    >
      <span className="hidden">{elementName}</span>
      <SVG src={`/icons/player/${currentConfig.file}`} />
    </div>
  )
}

export default Control
