const apiKey = 'b2bf63e6bfc381466e50b234c9a82d76';
const form = document.getElementById('form');
const city = document.getElementById('city');
const img = document.querySelector('img');
const feeling = document.getElementById('feeling');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const degree = document.getElementById('degree');
const description = document.querySelector('.description');
const error = document.querySelector('.error');


form.addEventListener('submit', e => {
    e.preventDefault();
    const cityValue = city.value;
    getWeather(cityValue);
})

async function getWeather(cityValue) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
    const data = await response.json();
    console.log(data);

    if (data.message) {
        error.style.display = 'block';
        error.textContent = data.message;
        description.style.display = 'none';
    } else {
        img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        feeling.textContent = `Feels Like: ${Math.round(data.main.feels_like)}°C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.innerHTML = `Wind: ${data.wind.speed}m/s`;
        degree.innerHTML = Math.round(data.main.temp) + "°C";
        description.style.display = 'block';
        error.style.display = 'none';
    }
}