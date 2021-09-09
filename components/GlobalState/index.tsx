// https://github.com/dai-shi/react-hooks-global-state
import { createStore } from 'react-hooks-global-state'
import sounds from '../../public/sounds/sounds.json'

const initialState = {
  currentSoundIndex: 0,
  isPlaying: false,
  isMuted: false,
  waves: false,
  bubbles: true,
  background: true,
  psicodelic: false,
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
  WAVES_ON: 'waves_on',
  WAVES_OFF: 'waves_off',
  BUBBLES_ON: 'bubbles_on',
  BUBBLES_OFF: 'bubbles_off',
  BACKGROUND_ON: 'background_on',
  BACKGROUND_OFF: 'background_off',
}

type StateProps = {
  currentSoundIndex: number
  isPlaying: boolean
  isMuted: boolean
  waves: boolean
  bubbles: boolean
  background: boolean
  psicodelic: boolean
}

type ActionProps = {
  type?: string
  value?: any
}

const reducer = (state: StateProps, action: ActionProps) => {
  const { currentSoundIndex } = state
  const totalSounds = sounds.data.length - 1

  // console.log('chaging to: ', action)

  switch (action.type) {
    case ACTIONS.PLAY:
      return { ...state, isPlaying: true }
    case ACTIONS.PAUSE:
      return { ...state, isPlaying: false }
    case ACTIONS.NEXT:
      return {
        ...state,
        currentSoundIndex: currentSoundIndex + 1 > totalSounds ? 0 : currentSoundIndex + 1,
        isPlaying: true,
      }
    case ACTIONS.PREV:
      return {
        ...state,
        currentSoundIndex: currentSoundIndex - 1 < 0 ? totalSounds : currentSoundIndex - 1,
        isPlaying: true,
      }
    case ACTIONS.PLAY_SOUND:
      return { ...state, currentSoundIndex: action.value, isPlaying: true }
    case ACTIONS.MUTE:
      return { ...state, isMuted: true }
    case ACTIONS.UNMUTE:
      return { ...state, isMuted: false }

    // VIEW
    case ACTIONS.WAVES_ON:
      return { ...state, waves: true }
    case ACTIONS.WAVES_OFF:
      return { ...state, waves: false }
    case ACTIONS.BUBBLES_ON:
      return { ...state, bubbles: true }
    case ACTIONS.BUBBLES_OFF:
      return { ...state, bubbles: false }
    case ACTIONS.BACKGROUND_ON:
      return { ...state, background: true }
    case ACTIONS.BACKGROUND_OFF:
      return { ...state, background: false }
    default:
      return state
  }
}

const { dispatch, useGlobalState } = createStore(reducer, initialState)

export { dispatch, useGlobalState, ACTIONS, sounds }
