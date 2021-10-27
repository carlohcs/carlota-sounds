/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { SoundAlbum } from '.'

describe('SoundAlbum', () => {
  // https://github.com/vercel/next.js/blob/canary/examples/with-jest/__tests__/snapshot.js
  it('Should render image with a defined alt and a path', () => {
    render(<SoundAlbum image="my-image.png" name="My image" />)

    const albumPicture = screen.getByAltText(/picture from album: my image/i)

    expect(albumPicture).toBeInTheDocument()
  })

  it('Should render an default image if image or name is false', () => {
    render(<SoundAlbum image={false} name={false} />)

    const albumPicture = screen.getByAltText(/picture from album: unknown/i)
    
    expect(albumPicture).toBeInTheDocument()
  })
})
