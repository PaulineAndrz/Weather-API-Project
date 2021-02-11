const url = 'http://api.openweathermap.org/data/2.5/weather'
const apiKey = 'c06516a3bb199bb320181c589f72433c'

let HTTpHeaders = new Headers();
let init = {
    method: 'GET',
    headers: HTTpHeaders,
    cache: 'default',
    mode: 'cors'
};


// if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//         let lon = position.coords.longitude;
//         let lat = position.coords.latitude;

//         const urlLocation = `${url}?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${apiKey}&lang=fr&units=metric`;

//     }
// }

class WeatherService {
    getWeatherByCity = async (city) => {
        return await fetch(`${url}?q=${city}&appid=${apiKey}&lang=fr&units=metric`, init).then(res => res.json())
    }
}

export default Object.freeze(new WeatherService())