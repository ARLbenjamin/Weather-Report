export class Store{

  constructor(){
    this.city;
    this.countryCode;
    this.defaultCity= 'bogota';
    this.defaultCountryCode= 'co';

  }
  
  setLocarionData(city, countryCode){

    this.city= localStorage.setItem('city', city);
    this.countryCode= localStorage.setItem('code', countryCode);
  }

  getLocationData(){
    if(localStorage.getItem('city')=== null){
        
        this.city= this.defaultCity;    
    } else{

     this.city= localStorage.getItem('city', city);
    }
    if(localStorage.getItem('code') === null){

        this.countryCode= this.defaultCountryCode;
    }else{

        this.countryCode= localStorage.getItem('code', countryCode);
    }

    return{

      city: this.city,
      code: this.countryCode
    }
  }
}