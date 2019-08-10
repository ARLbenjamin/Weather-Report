export class Weather{

    constructor(city, countryCode){
       this.apiKey='3301aadd344ea22e15dab0b4fd70069f';
       this.city=city;
       this.countryCode=countryCode;
    }
   
    async getWeather(){
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const response = await fetch(url);
        const data= await response.json();
        if(data.message === 'city not found'){
            alert('City Not Found, Please Try Again...');
        }
        return{
            data
        }
        
    }
    
    changeLocation(city, countryCode){

      this.city= city;
      this.countryCode= countryCode;

    }
}