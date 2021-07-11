class Weather {
    constructor (location) {
        this.location = location;
        this.apikey = 'cbfd30fec4de29bb17e23cd2aa36e278';
    }
  
    //fetch weather data from api 
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=metric&appid=${this.apikey}`);

        const responseData = await response.json();

        return responseData;
    }

   // Change the location
    changeLocation(location){
        this.location = location
    }
}
