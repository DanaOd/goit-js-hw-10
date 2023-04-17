export default function fetchCountries(name) {

  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags.svg,languages`) ///https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags.svg,languages

    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    // .then(data => {
    //     data.map(country => {
    //         console.log('country.name.official', country, country.name.official);
    //         // refs.list.innerHTML(`<li>${country.name.official}</li>`);
    //     })
    // })
    .catch(error => console.log(error));
}
