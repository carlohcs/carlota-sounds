const run = (canvas) => {
  window.canvasOptions = {
  	autoClear: true,
  	autoCompensate: false,
  	autoPushPop: true,
  	canvas: canvas,
  	centered: true,
  	width: null,
  	height: null
  };

  require('./waves')
}

module.exports = {
  run,
}
