export class UI{

    constructor(){

        this.location= document.querySelector('#weather-location');
        this.description= document.querySelector('#weather-description');
        this.string= document.querySelector('#weather-string');
        this.humidity= document.querySelector('#weather-humidity');
        this.wind= document.querySelector('#weather-wind');

    }

    projectData(weatheReport){
        console.log(weatheReport);
        this.location.textContent= weatheReport.data.name + ' - ' + weatheReport.data.sys.country;
        this.description.textContent= weatheReport.data.weather[0].description;
        this.string.textContent= weatheReport.data.main.temp + ' °C';
        this.humidity.textContent= 'Humidity ' + weatheReport.data.main.humidity + '%';
        this.wind.textContent= 'Wind ' + weatheReport.data.wind.speed + ' m/s';
    }
}