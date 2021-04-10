const nav = document.querySelector('#main')
const navTop = nav.offsetTop

function fixNav() {
  if (window.scrollY >= navTop) {
    // Prevent Layout Shift due to removal of nav fom normal flow
    document.body.style.paddingBlockStart = `${nav.offsetHeight}px`
    document.body.classList.add('fixed-nav')
  } else {
    document.body.style.paddingBlockStart = 0
    document.body.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', fixNav)
