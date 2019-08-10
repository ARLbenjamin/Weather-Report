const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');

const store= new Store();
const {city, countryCode} = store.getLocationData();
const ui= new UI();
const weather = new Weather(city, countryCode);

require("./index.css");

async function fetchWeather(){
  const data= await weather.getWeather();
  ui.projectData(data);
}

document.querySelector('#w-change-btn')
.addEventListener('click', (e)=>{
  e.preventDefault();
  const city= document.querySelector('#city').value;
  const countryCode= document.querySelector('#countryCode').value;
  weather.changeLocation(city, countryCode);
  store.setLocarionData(city, countryCode);
  fetchWeather();
});
document.addEventListener('DOMContentLoaded', fetchWeather);