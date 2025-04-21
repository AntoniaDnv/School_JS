
function getWeather(){
    fetch('https://api.open-meteo.com/v1/forecast?latitude=42.6977&longitude=23.3242&current_weather=true')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const container = document.querySelector('.container');
        container.innerHTML = `
        <p>Weather temperature:${data.current_weather.temperature}</p>
        <p>Weather code: ${data.current_weather.weathercode}</p>
        <p>Wind speed: ${data.current_weather.windspeed}</p>
        <p>Interval: ${data.current_weather_units.interval}</p>
        <p>Units time: ${data.current_weather_units.time}</p>
        <p>Units weather code: ${data.current_weather_units.weathercode}</p>
        <p>units winddirection: ${data.current_weather_units.winddirection}</p>
        `
        const timeContainer = document.querySelector('.time');
        timeContainer.innerHTML = ` <p>time: ${data.current_weather.time}</p>`

        // document.getElementById('temp').innerText = data.current_weather.temperature;
        // document.getElementById('humidity').innerText = data.current_weather.winddirection;
    })

}

getWeather();