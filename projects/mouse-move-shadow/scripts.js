const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const shadowExtension = 100; // 100px

function shadow(event) {
  // const width = hero.offsetWidth
  // const height = hero.offsetHeight
  const { offsetWidth: width, offsetHeight: height } = hero;

  let { offsetX: x, offsetY: y } = event;

  if (this !== event.target) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }

  // Calculate how far text-shadow will go
  const xShadowExtension = Math.round(
    (x / width) * shadowExtension - shadowExtension / 2
  );
  const yShadowExtension = Math.round(
    (y / height) * shadowExtension - shadowExtension / 2
  );

  // Update text's shadow
  text.style.textShadow = `
    ${xShadowExtension}px ${yShadowExtension}px 0 rgba(255,0,255,0.72),
    ${xShadowExtension * -1}px ${yShadowExtension}px 0 rgba(0,255,255,0.72),
    ${yShadowExtension}px ${xShadowExtension}px 0 rgba(0,255,0,0.72),
    ${yShadowExtension * -1}px ${xShadowExtension}px 0 rgba(0,0,255,0.72)
  `;
}

hero.addEventListener('mousemove', shadow);
