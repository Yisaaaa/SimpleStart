// WEATHER SCRIPT

const api = `https://api.openweathermap.org/data/2.5/weather?lat=${CONFIG.latitude}&lon=${CONFIG.longitude}&appid=${CONFIG.apiKey}&units=metric`;

const tempElement = document.querySelector(".temp");
const descTxtElement = document.querySelector(".desc-txt");
const weatherIconElement = document.querySelector(".weather-icon");

function getWeather() {
    fetch(api)
        .then((response) => {
            let data = response.json();
            return data;
        })
        .then((data) => {
            console.log(data);
            let desc = data.weather[0].description;
            let temp = data.main.temp;
            let iconId = data.weather[0].icon;
            let weatherIcon = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

            tempElement.innerHTML = temp + "°C";
            descTxtElement.textContent = "";
            weatherIconElement["src"] = weatherIcon;
            descTxtElement.textContent = desc;
        })
        .catch((err) => {
            console.log(`Weather Error: ${err}`);
        });
}

getWeather();
