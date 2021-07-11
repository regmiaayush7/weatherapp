class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.sun = document.getElementById('w-sun');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${weather.main.temp}°C`;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.sun.textContent = `Max temp/Min temp: ${weather.main.temp_max}°C/${weather.main.temp_min}°C`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} °C`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
    }
}
