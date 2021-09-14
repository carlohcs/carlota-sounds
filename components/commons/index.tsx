export const getPropValue = (prop: string, obj: object) => {
  const definedKey = prop.toLocaleLowerCase() as keyof typeof obj

  return obj[definedKey]
}

// FROM: https://code.labstack.com/HVdZZYqH
export function convertToReducedTime(time: number) {
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600)
  var mins = ~~((time % 3600) / 60)
  var secs = ~~time % 60

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = ''
  if (hrs > 0) {
    ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
  }
  ret += '' + (mins < 10 ? `0${mins}` : mins) + ':' + (secs < 10 ? '0' : '')
  ret += '' + secs

  return ret
}

// https://codepen.io/rebosante/pen/eENYBv
//t = current time
//b = start value
//c = change in value
//d = duration
const easeInOutQuad = function (t: number, b: number, c: number, d: number) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

export function scrollTo(element: HTMLElement, to: number, duration: number) {
  var start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20

  var animateScroll = function () {
    currentTime += increment
    var val = easeInOutQuad(currentTime, start, change, duration)

    element.scrollTop = val

    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }

  animateScroll()
}

export function createMarkup(html: string) {
  return { __html: html }
}

/**
 * Normalize string to a normal text
 * In: Textão com vários acentos
 * Out: Textao com varios acentos
 *
 * @param   {String} str String to be normalized
 * @returns {String}
 */
export function toNormalString(str: string): string {
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  str = str.replace(/[\.,_-]/gim, '')

  return str.trim()
}

/**
 * Transform "A simple text" to "a-simple-text"
 *
 * @param {String} str String to be "snaked"
 * @returns {String}
 */
export function snakeCase(str: string): string {
  str = toNormalString(str)
  str = str.replace(/[\s]+/gim, '-')
  str = str.toLocaleLowerCase()

  return str.trim()
}
