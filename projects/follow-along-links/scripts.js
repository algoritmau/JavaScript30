const triggers = document.querySelectorAll('a');
const highlightEl = document.createElement('span');
highlightEl.classList.add('highlight');
document.body.insertAdjacentElement('afterbegin', highlightEl);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlightEl.style.width = `${coords.width}px`;
  highlightEl.style.height = `${coords.height}px`;
  highlightEl.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((trigger) => {
  trigger.addEventListener('mouseenter', highlightLink);
});
