const run = (canvas) => {
  const ctx = canvas.getContext('2d')
  const game = { req: false, score: 0 }
  const bubble = {
    bubbleCount: 30,
    bubbles: [],
    speed: 1,
  }

  function bubbleMaker() {
    let bubbleSize = Math.random() * 10 + 1
    let xPos = Math.random() * (canvas.width - bubbleSize) - canvas.width
    let yPos = Math.random() * (canvas.height - bubbleSize) // start from somewhere from bottom

    bubble.bubbles.push({
      x: xPos,
      y: yPos,
      size: bubbleSize,
      speed: Math.floor(Math.random() * 5) + bubble.speed,
      colors: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
    })
  }

  function drawBubble(xPos, yPos, bubbleSize, colors) {
    ctx.beginPath()

    // createRadialGradient(x0, y0, r0, x1, y1, r1)
    const gradient = ctx.createRadialGradient(xPos, yPos - 10, bubbleSize, xPos, yPos, bubbleSize + 10)
    gradient.addColorStop(0, `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, .9)`)
    gradient.addColorStop(1, 'rgba(255, 255, 255, .1)')

    ctx.fillStyle = gradient
    ctx.strokeStyle = 'rgba(255, 255, 255, .4)'
    ctx.arc(xPos, yPos, bubbleSize, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (bubble.bubbles.length < bubble.bubbleCount) {
      bubbleMaker()
    }

    bubble.bubbles.forEach((currentBubble, index) => {
      // currentBubble.y--; // normal
      // currentBubble.y -= 10; // fast
      // currentBubble.y -= bubble.speed; // default
      // currentBubble.y -= currentBubble.speed // default
      // currentBubble.x -= Math.floor(Math.random() * 6) - 3

      currentBubble.y += Math.floor(Math.random() * 6) - 3
      currentBubble.x += currentBubble.speed

      if (currentBubble.size + currentBubble.x > canvas.width) {
        bubble.bubbles.splice(index, 1)
      }

      drawBubble(currentBubble.x, currentBubble.y, currentBubble.size, currentBubble.colors)
    })

    requestAnimationFrame(draw)
  }

  game.req = requestAnimationFrame(draw)
}

module.exports = {
  run,
}
