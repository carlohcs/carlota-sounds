import { SoundItemProps } from '@/components/Media/Sounds/SoundItem'
import '@/components/Globals'
import 'p5/lib/addons/p5.sound'
import P5 from 'p5'

// https://codesandbox.io/s/p5js-with-typescript-8rgs6?file=/src/app.ts:43-49

// From: https://stackoverflow.com/a/56984941

// Follow this ideia:
// https://github.com/LABCAT/donuts-no-1/blob/master/src/js/P5Sketch.js
declare global {
  var CSSound: Sound
}

class Sound {
  p5: P5
  sounds: SoundItemProps[]
  sound: any
  preloadSoundIndex: number

  constructor(p5: P5, sounds: SoundItemProps[], preloadSoundIndex: number) {
    this.p5 = p5
    this.sounds = sounds
    this.preloadSoundIndex = preloadSoundIndex

    this.sound = null

    this.setup()
  }

  /**
   * Setup component
   */
  setup() {
    this.preload(this.preloadSoundIndex)

    return this
  }

  load(soundIndex: number) {
    // @ts-ignore
    // From p5.sound
    this.sound = this.p5.loadSound(`/sounds/files/${this.sounds[soundIndex].file}.mp3`)

    return this
  }

  /**
   * Preload a file
   *
   * @param preloadSoundIndex Number of index in sounds array
   */
  preload(preloadSoundIndex: number) {
    this.load(preloadSoundIndex)

    return this
  }

  /**
   * Play a sound
   */
  play() {
    this.sound.play()

    return this
  }

  /**
   * Pause a sound
   */
  pause() {
    this.sound.pause()
    
    return this
  }

  /**
   * Return if is playing
   * 
   */
  isPlaying() {
    return this.sound.isPlaying()
  }

  /**
   * Return if is loaded
   * 
   */
  isLoaded() {
   return this.sound.isLoaded() 
  }

  /**
   * Play a song by index
   * 
   * @param index Number of index from sound
   * @returns Sound
   */
  playByIndex(index: number) {
    if(this.isPlaying()) {
      this.pause()
    }
    
    this.load(index)

    if(this.isLoaded()) {
      this.play()
    } else {
      this.playWhenLoad()
    }
    
    return this
  }

  playWhenLoad() {
    let checkIsloaded = setInterval(() => {
      if(this.isLoaded()) {
        this.play()
        clearInterval(checkIsloaded)
      }
    }, 100)
  }

  /**
   * Mute or unmute the sound
   * 
   * @param mute A flag to mute or unmute
   */
  toggleMute(mute: boolean) {
    if(mute) {
      this.sound.setVolume(0)
    } else {
      this.sound.setVolume(1)
    }
  }

  subscribeProgressTime(callback: (time: number) => void) {
    let currentProgress = setInterval(() => {
      if(this.isPlaying()) {
        callback(this.sound.currentTime())
      }
    }, 1000)
  }

  /**
   * Expose the component
   */
  expose() {
    window.CSSound = window.CSSound || this

    return this
  }
}

const sketch = (p5: P5) => {
  p5.setup = () => {
    // @ts-ignore 
    // Document it's wrong
    p5.soundFormats('mp3', 'ogg')
  }
}

const SoundInstance = (sounds: SoundItemProps[], preloadSoundIndex: number) => {
  return new Sound(new P5(sketch), sounds, preloadSoundIndex)
}

export default SoundInstance
