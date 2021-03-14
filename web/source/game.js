const canvas = document.getElementById("c")

CANVAS_SIZE = [
  window.outerHeight + 1000,
  window.outerWidth + 1000
]

canvas.height = CANVAS_SIZE[0]
canvas.width  = CANVAS_SIZE[1]

///////////////////////////////////////////

const ctx = canvas.getContext("2d")

ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height)

window.scroll(50, 50)