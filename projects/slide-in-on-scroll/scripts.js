function debounce(func, wait = 20, immediate = true) {
  var timeout;

  return function () {
    var context = this,
      args = arguments;

    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const slidyImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  slidyImages.forEach((slidyImage) => {
    // Halfway through the image
    const slideInAt =
      window.scrollY + window.innerHeight - slidyImage.height / 2;

    const imageBottom = slidyImage.offsetTop + slidyImage.height;

    const isHalfImageShown = slideInAt > slidyImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfImageShown && isNotScrolledPast) {
      slidyImage.classList.add('active');
    } else {
      slidyImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
