import SVG from '@/components/SVG/SVG'
import { dispatch, useGlobalState, ACTIONS } from '@/components/GlobalState'

type ControlProps = {
  elementName: string
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

export const Control = ({ elementName }: ControlProps) => {
  const [isPlaying, setIsPlaying] = useGlobalState('isPlaying')

  let currentConfig: any

  const elementConfigs = {
    prev: {
      file: 'prev-next.svg',
      className: 'rotate-180',
      fn: () => {
        dispatch({ type: ACTIONS.PREV })
      },
    },
    next: {
      file: 'prev-next.svg',
      fn: () => {
        dispatch({ type: ACTIONS.NEXT })
      },
    },
    play: {
      file: isPlaying ? 'pause.svg' : 'play.svg',
      fn: () => {
        dispatch({ type: isPlaying ? ACTIONS.PAUSE : ACTIONS.PLAY })
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
      className={`cs-player__actions__${elementName} cursor-pointer hover:bg-gray-400 hover:transition-colors rounded-full ${currentConfig.className}`}
      onClick={currentConfig.fn}
    >
      <SVG src={`/icons/player/${currentConfig.file}`} />
    </div>
  )
}
