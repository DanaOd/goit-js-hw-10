import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;

const refs = {
  query: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

refs.query.addEventListener('input', debounce(onInputHandler, DEBOUNCE_DELAY));

let country = '';

function onInputHandler(event) {
  console.log(event.target.value);

  country = event.target.value;

  fetchCountries(country)
    .then(data => {
      data.map(country => {
        console.log('country.name.official', country, country.name.official);
        refs.list.insertAdjacentHTML("beforeend", `<li>${country.name.official}</li>`);
      });
    })
    .catch(error => console.log(error));
}
