const slider = document.querySelector('.items')
let isDown = false
let startX, scrollLeft

const handleMouseDown = (event) => {
  isDown = true

  slider.classList.add('active')

  startX = event.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft // initial scroll
}

const handleMouseLeave = () => {
  isDown = false
  slider.classList.remove('active')
}

const handleMouseUp = () => {
  isDown = false
  slider.classList.remove('active')
}

const handleMouseMove = (event) => {
  if (!isDown) return

  event.preventDefault()

  // Figure out cursor's x position upon moving it
  const x = event.pageX - slider.offsetLeft

  const distance = (x - startX) * 2

  slider.scrollLeft = scrollLeft - distance
}

slider.addEventListener('mousedown', handleMouseDown)
slider.addEventListener('mouseleave', handleMouseLeave)
slider.addEventListener('mouseup', handleMouseUp)
slider.addEventListener('mousemove', handleMouseMove)
