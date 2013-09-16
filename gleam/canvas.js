var ctx = document.getElementById('gleam').getContext('2d');

ctx.font = '4em Helvetica'

var hue = 0,
    phrase = 'CLINKLE',
    letterSpacing = 20,
    initialX = ((ctx.canvas.width - (ctx.measureText(phrase).width + (phrase.length - 1) * letterSpacing)) / 2),
    y = ctx.canvas.height/2;

ctx.fillStyle = 'rgba(0, 0, 0, 1)';
drawBackground()
ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';

setInterval(gleam, 2500)
setInterval(drawBackground, 150)

function gleam() {
  eachLetter(function(letter, x, index) {
    setTimeout(draw.bind(null, letter, x, y), 100 * index)
  })
}

function draw(text, x, y) {
  ctx.shadowBlur = 10;
  ctx.lineWidth = 2 + 2 * Math.random();
  hue = (hue + 10 * Math.random()) % 360;
  ctx.strokeStyle = 'hsl(' + hue + ', 50%, 50%)';
  ctx.shadowColor = 'hsl(' + hue + ', 50%, 50%)';
  ctx.strokeText(text, x, y)
  ctx.shadowBlur = 0;
}

function drawBackground() {
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.lineWidth = 1
  ctx.strokeStyle = 'grey'

  eachLetter(function(letter, x) {
    ctx.strokeText(letter, x, y);
  })
}

function eachLetter(callback) {
  var x = initialX;
  phrase.split('').forEach(function(letter, index) {
    callback(letter, x, index)
    x += ctx.measureText(letter).width + letterSpacing
  })
}
