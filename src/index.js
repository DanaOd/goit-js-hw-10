import './css/styles.css';

const DEBOUNCE_DELAY = 300;
console.log('hi');

let name = "France";

fetch(`https://restcountries.com/v3.1/name/deutschland`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));
