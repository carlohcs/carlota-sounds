// https://github.com/dai-shi/react-hooks-global-state
import { createStore } from 'react-hooks-global-state'
import sounds from '../../public/sounds/sounds.json'

const initialState = {
  currentSoundIndex: 0,
  isPlaying: false,
  isMuted: false,
  // animation: 0
}

const ACTIONS = {
  PLAY: 'play',
  PAUSE: 'pause',
  NEXT: 'next',
  PREV: 'prev',
  PLAY_SOUND: 'play_sound',
  MUTE: 'mute',
  UNMUTE: 'unmute',
}

type StateProps = {
  currentSoundIndex: number
  isPlaying: boolean
  isMuted: boolean
}

type ActionProps = {
  type?: string
  value?: any
}

const reducer = (state: StateProps, action: ActionProps) => {
  const { currentSoundIndex } = state
  const totalSounds = sounds.data.length - 1

  switch (action.type) {
    case ACTIONS.PLAY:
      return { ...state, isPlaying: true }
    case ACTIONS.PAUSE:
      return { ...state, isPlaying: false }
    case ACTIONS.NEXT:
      return {
        ...state,
        currentSoundIndex: currentSoundIndex + 1 > totalSounds ? 0 : currentSoundIndex + 1,
      }
    case ACTIONS.PREV:
      return { ...state, currentSoundIndex: currentSoundIndex - 1 < 0 ? totalSounds : currentSoundIndex - 1 }
    case ACTIONS.PLAY_SOUND:
      return { ...state, currentSoundIndex: action.value }
    case ACTIONS.MUTE:
      return { ...state, isMuted: true }
    case ACTIONS.UNMUTE:
      return { ...state, isMuted: false }
    default:
      return state
  }
}

const { dispatch, useGlobalState } = createStore(reducer, initialState)

export { dispatch, useGlobalState, ACTIONS }
