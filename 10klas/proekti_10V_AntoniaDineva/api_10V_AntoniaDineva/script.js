
function getWeather(){
    fetch('https://api.open-meteo.com/v1/forecast?latitude=42.6977&longitude=23.3242&current_weather=true')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const container = document.querySelector('.container');
        const { 
            current_weather,
            current_weather_units
        } = data;
        const {
            temperature,
            weathercode: current_weather_code,
            windspeed
        } = current_weather;
        const {
            interval,
            time,
            weathercode: current_weather_units_code,
            winddirection
        } = current_weather_units;
        
        container.innerHTML = `
        <p>Weather temperature:${temperature}</p>
        <p>Weather code: ${current_weather_code}</p>
        <p>Wind speed: ${windspeed}</p>
        
        <p>Interval: ${interval}</p>
        <p>Units time: ${time}</p>
        <p>Units weather code: ${current_weather_units_code}</p>
        <p>units winddirection: ${winddirection}</p>
        `
        const timeContainer = document.querySelector('.time');
        timeContainer.innerHTML = ` <p>time: ${data.current_weather.time}</p>`

        // document.getElementById('temp').innerText = data.current_weather.temperature;
        // document.getElementById('humidity').innerText = data.current_weather.winddirection;
    })

}

getWeather();