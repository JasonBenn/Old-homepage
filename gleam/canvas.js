var ctx = document.getElementById('gleam').getContext('2d');

ctx.font = '4em Helvetica'

var hue = 0,
    phrase = 'CLINKLE',
    letterSpacing = 20,
    initialXPos = ((ctx.canvas.width - (ctx.measureText(phrase).width + (phrase.length - 1) * letterSpacing)) / 2),
    yPos = ctx.canvas.height/2;

ctx.fillStyle = 'rgba(0, 0, 0, 1)';
drawBackground()
ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';

setInterval(function() {
  gleam();
}, 2500)

setInterval(drawBackground, 150)

function gleam() {
  eachLetter(function(letter, xPos, index) {
    setTimeout(draw.bind(null, letter, xPos, yPos), 100 * index)
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

  eachLetter(function(letter, xPos) {
    ctx.strokeText(letter, xPos, yPos);
  })
}

function eachLetter(callback) {
  var xPos = initialXPos;
  phrase.split('').forEach(function(letter, index) {
    callback(letter, xPos, index)
    xPos += ctx.measureText(letter).width + letterSpacing
  })
}
