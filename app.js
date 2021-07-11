//Init class weather
const weather = new Weather('Kathmandu');
//Init UI class
const ui = new UI;

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather(){
    weather.getWeather()
    .then( result => {
        ui.paint(result);
    })
    .catch( err => console.log(err));
}

//Adding event on the change location button
const changeLocbtn = document.getElementById('w-change-btn')

changeLocbtn.addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    weather.changeLocation(city);
    getWeather();
    $('#locModal').modal('hide');
    e.preventDefault()
})