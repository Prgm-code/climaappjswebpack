export class Weather {

    constructor(city,countryCode) {
        this.apikey = '2577761d34e887b92cb91e8df2c380c3'; 
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric&lang=es`;
        const response   = await fetch(URI);
        const data = await response.json();
        return data;

    }

    changeLocation (city , countryCode) { 

        this.city = city;
        this.countryCode = countryCode ; 
        
    }

}