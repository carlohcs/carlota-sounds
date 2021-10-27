/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import { createStore } from 'react-hooks-global-state'

// import * as GlobalState from '@/components/GlobalState'
import * as gTag from '@/libs/gtag'

import { SoundItem } from '.'
import type { SoundItemProps } from './SoundItem'

// const { dispatch, useGlobalState } = createStore(GlobalState.reducer, GlobalState.initialState)

// jest.mock('@/components/GlobalState', () => {
//   return {
//     ACTIONS: { PLAY_SOUND: 'PLAY_SOUND' },
//     dispatch: dispatch,
//     useGlobalState: useGlobalState
//   }
// })

jest.mock('@/libs/gtag', () => {
  return {
    event: jest.fn(),
  }
})

const defaultTrack = {
  title: 'Carlota Music',
  time: '05:00',
  album: 'Carlota Music Album',
  albumImage: '01-carlota-music-algum.png',
  index: 0,
  className: 'carlota-music',
} as SoundItemProps

describe('SoundItem', () => {
  // https://github.com/vercel/next.js/blob/canary/examples/with-jest/__tests__/snapshot.js
  it('Should render a track item', () => {
    render(<SoundItem {...defaultTrack} />)

    const trackTitle = screen.getByText(defaultTrack.title)
    const trackTime = screen.getByText(defaultTrack.time)
    let albumRegex = new RegExp(`${defaultTrack.album}`, 'i')
    const trackAlbum = screen.getByAltText(albumRegex)

    // screen.debug(trackItem)

    expect(trackTitle).toBeInTheDocument()
    expect(trackTime).toBeInTheDocument()
    expect(trackAlbum).toBeInTheDocument()
  })

  it('Should render a waves image indicator when track is playing', () => {
    const GlobalState = require('@/components/GlobalState')

    GlobalState.dispatch({ type: GlobalState.ACTIONS.PLAY_SOUND, value: defaultTrack.index })

    render(<SoundItem {...defaultTrack} />)

    let playingReg = new RegExp(`Playing ${defaultTrack.title}`, 'i')
    const playingImage = screen.getByAltText(playingReg)

    expect(playingImage).toBeInTheDocument()
  })

  it('Should play sound and call gtagEvent when user click at track', () => {
    render(<SoundItem {...defaultTrack} />)

    const trackTitle = screen.getByText(defaultTrack.title)

    userEvent.click(trackTitle)

    expect(trackTitle.closest('.cs-sound-item')?.classList.contains('cs-sound-item--playing')).toBeTruthy()
    expect(gTag.event).toHaveBeenCalled()
  })
})
