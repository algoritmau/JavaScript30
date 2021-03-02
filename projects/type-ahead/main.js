const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cities = [];
const searchInput = document.querySelector('.search-form__input');
const searchResultsList = document.querySelector('.search-results-list');

const getCities = async () => {
  const payload = await fetch(endpoint);
  cities = (await payload.json()).flat();
};

const findMatches = (wordToMatch, cities) => {
  return cities.filter((place) => {
    // Determine whether searched word matches city or state
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
};

const formatNumberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const renderMatches = (e) => {
  const resultsArray = findMatches(e.currentTarget.value, cities);
  const resultsHtml = resultsArray
    .map((result) => {
      const searchedWord = new RegExp(e.currentTarget.value, 'gi');
      const highlightedCity = result.city.replace(
        searchedWord,
        `<span class="highlighted">${e.currentTarget.value.toLowerCase()}</span>`
      );
      const highlightedState = result.state.replace(
        searchedWord,
        `<span class="highlighted">${e.currentTarget.value.toLowerCase()}</span>`
      );

      return `
        <li class="search-results-list__item">
          <span class="name">${highlightedCity}, ${highlightedState}</span>
          <span class="population">${formatNumberWithCommas(
            result.population
          )}</span>
        </li>
      `;
    })
    .join('');

  searchResultsList.innerHTML = resultsHtml;
};

searchInput.addEventListener('change', renderMatches);
searchInput.addEventListener('keyup', renderMatches);

getCities();
