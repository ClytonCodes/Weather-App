const API = `17dce661f34ea7eb53576e5440b550e7`

//document elements 

const text = document.getElementById("input-field");
const cityName = document.getElementById('city-name');
const dateP = document.getElementById('date');
const mainTemp = document.getElementById('temp');
const tempImg = document.getElementById('temp-icon');
const tempInfo = document.getElementById('weather-info');
const maxTemp = document.getElementById('max-temp');
const minTemp = document.getElementById('min-temp');
const searchButton = document.getElementById('search');

//async function

async function setData(city){
    const raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API}`);
    const data = await raw.json();

    cityName.innerHTML =data.name;
    mainTemp.innerHTML = `${Math.floor(data.main.temp)}°C`
    maxTemp.innerHTML = `${Math.floor(data.main.temp_max)}°C`
    minTemp.innerHTML = `${Math.floor(data.main.temp_min)}°C`
    tempImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    tempInfo.innerHTML = data.weather[0].description;
    const date = new Date;
    const month = date.toLocaleString('default', {month:'short'});
    const day = date.getDate();
    const year = date.getFullYear();
    dateP.innerHTML = `${day} ${month} ${year}`
    console.log(data);
}

searchButton.addEventListener("click", ()=>{
    const cityn = text.value;
    setData(cityn);
});