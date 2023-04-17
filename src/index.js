import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries.js';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const refs = {
  query: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

refs.query.addEventListener('input', debounce(onInputHandler, DEBOUNCE_DELAY));

const countriesList = [];

function onInputHandler(event) {
  let countryQuery = event.target.value.trim();
  refs.list.innerHTML = '';
  refs.info.innerHTML = '';
  countriesList.length = 0;

  if (!countryQuery) {
    countriesList.length = 0;
    return;
  }

  fetchCountries(countryQuery)
    .then(data => {
      data.map(country => {
        countriesList.push(country);
      });

      renderCountries(countriesList);
    })
    .catch(error => console.log(error));
}

function renderCountries(countryArr) {
  if (countryArr.length === 1) {
    const languagesObj = countryArr[0].languages;
    let languagesString = '';

    //перебор объекта с языками чтобы вытащить их в строку
    for (let key in languagesObj) {
      languagesString += `${languagesObj[key]}, `;
    }

    let countriesToRender = `<li> <img src="${countryArr[0].flags.svg}" width="32" height="auto"> ${countryArr[0].name.official}</li>`;
    let descr = `<b>Capital: </b>${countryArr[0].capital}  <br>
    <b>Population: </b> ${countryArr[0].population}  <br>
    <b>Languages: </b> ${languagesString}
    `;

    //рендер заголовка и описания
    refs.info.insertAdjacentHTML('afterbegin', descr);
    refs.list.insertAdjacentHTML('beforeend', countriesToRender);

    return;
  } else if (countryArr.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name'
    );
    return;
  } else if (countryArr.length >= 2 && countryArr.length <= 10) {
    //рендер разметки со списком стран через reduce
    let countriesToRender = countryArr.reduce((accum, country) => {
      console.log(country.flags.svg);
      return (
        accum +
        `<li> <img src="${country.flags.svg}" width="32" height="auto">   ${country.name.official}</li>\n`
      );
    }, '');

    return refs.list.insertAdjacentHTML('beforeend', countriesToRender);
  }
}
