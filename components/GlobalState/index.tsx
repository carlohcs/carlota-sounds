// https://github.com/dai-shi/react-hooks-global-state
import { createStore } from 'react-hooks-global-state'

// https://immerjs.github.io/immer/
import { produce } from 'immer'
import sounds from '../../public/sounds/sounds.json'

const initialState = {
  currentSoundIndex: 0,
  playingProgress: 0,
  isPlaying: false,
  isMuted: false,
  waves: false,
  bubbles: true,
  background: true,
  psicodelic: false,
  menuOpened: false,
  // animation: 0
}

const ACTIONS = {
  PLAY: 'play',
  PAUSE: 'pause',
  NEXT: 'next',
  PREV: 'prev',
  PLAY_SOUND: 'play_sound',
  MUTE: 'mute',
  PLAYING_PROGRESS: 'playing_progress',
  UNMUTE: 'unmute',
  WAVES_ON: 'waves_on',
  WAVES_OFF: 'waves_off',
  BUBBLES_ON: 'bubbles_on',
  BUBBLES_OFF: 'bubbles_off',
  BACKGROUND_ON: 'background_on',
  BACKGROUND_OFF: 'background_off',
  MENU_OPEN: 'menu_open',
  MENU_CLOSE: 'menu_close',
}

type StateProps = {
  currentSoundIndex: number
  playingProgress: number
  isPlaying: boolean
  isMuted: boolean
  waves: boolean
  bubbles: boolean
  background: boolean
  psicodelic: boolean
  menuOpened: boolean
}

type ActionProps = {
  type: string
  value?: any
}

// const reducer = (state: StateProps, action: ActionProps) => {
//   const { currentSoundIndex } = state
//   const totalSounds = sounds.data.length - 1

//   // console.log('chaging to: ', action)

//   switch (action.type) {
//     case ACTIONS.PLAY:
//       return { ...state, isPlaying: true }
//     case ACTIONS.PAUSE:
//       return { ...state, isPlaying: false }
//     case ACTIONS.NEXT:
//       return {
//         ...state,
//         currentSoundIndex: currentSoundIndex + 1 > totalSounds ? 0 : currentSoundIndex + 1,
//         isPlaying: true,
//       }
//     case ACTIONS.PREV:
//       return {
//         ...state,
//         currentSoundIndex: currentSoundIndex - 1 < 0 ? totalSounds : currentSoundIndex - 1,
//         isPlaying: true,
//       }
//     case ACTIONS.PLAY_SOUND:
//       return { ...state, currentSoundIndex: action.value, isPlaying: true }
//     case ACTIONS.MUTE:
//       return { ...state, isMuted: true }
//     case ACTIONS.UNMUTE:
//       return { ...state, isMuted: false }
//     case ACTIONS.PLAYING_PROGRESS:
//       return { ...state, playingProgress: action.value }

//     // VIEW
//     case ACTIONS.WAVES_ON:
//       return { ...state, waves: true }
//     case ACTIONS.WAVES_OFF:
//       return { ...state, waves: false }
//     case ACTIONS.BUBBLES_ON:
//       return { ...state, bubbles: true }
//     case ACTIONS.BUBBLES_OFF:
//       return { ...state, bubbles: false }
//     case ACTIONS.BACKGROUND_ON:
//       return { ...state, background: true }
//     case ACTIONS.BACKGROUND_OFF:
//       return { ...state, background: false }
//     case ACTIONS.MENU_OPEN:
//       return { ...state, menuOpened: true }
//     case ACTIONS.MENU_CLOSE:
//       return { ...state, menuOpened: false }
//     default:
//       return state
//   }
// }

const reducer = (state: StateProps, action: ActionProps) =>
  produce(state, (draft) => {
    const { currentSoundIndex } = state
    const totalSounds = sounds.data.length - 1

    switch (action.type) {
      case ACTIONS.PLAY:
        draft.isPlaying = true
        break
      case ACTIONS.PAUSE:
        draft.isPlaying = false
        break
      case ACTIONS.NEXT:
        draft.currentSoundIndex = currentSoundIndex + 1 > totalSounds ? 0 : currentSoundIndex + 1
        draft.isPlaying = true
        break
      case ACTIONS.PREV:
        draft.currentSoundIndex = currentSoundIndex - 1 < 0 ? totalSounds : currentSoundIndex - 1
        draft.isPlaying = true
        break
      case ACTIONS.PLAY_SOUND:
        draft.currentSoundIndex = action.value
        draft.isPlaying = true
        break
      case ACTIONS.MUTE:
        draft.isMuted = true
        break
      case ACTIONS.UNMUTE:
        draft.isMuted = false
        break
      case ACTIONS.PLAYING_PROGRESS:
        draft.playingProgress = action.value
        break

      // VIEW
      case ACTIONS.MENU_OPEN:
        draft.menuOpened = true
        break
      case ACTIONS.MENU_CLOSE:
        draft.menuOpened = false
        break
      case ACTIONS.WAVES_ON:
        draft.waves = true
        break
      case ACTIONS.WAVES_OFF:
        draft.waves = false
        break
      case ACTIONS.BUBBLES_ON:
        draft.bubbles = true
        break
      case ACTIONS.BUBBLES_OFF:
        draft.bubbles = false
        break
      case ACTIONS.BACKGROUND_ON:
        draft.background = true
        break
      case ACTIONS.BACKGROUND_OFF:
        draft.background = false
        break
    }
  })

const { dispatch, useGlobalState } = createStore(reducer, initialState)

export { dispatch, useGlobalState, ACTIONS, sounds }
