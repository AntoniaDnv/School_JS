
function getWeather(){
    fetch('https://api.open-meteo.com/v1/forecast?latitude=42.6977&longitude=23.3242&current_weather=true')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const container = document.querySelector('.container');
        container.innerHTML = `
        <p>${data.current_weather.temperature}</p>
        <p>${data.current_weather.time}</p>
        <p>${data.current_weather.weathercode}</p>
        <p>${data.current_weather.windspeed}</p>
        <p>${data.current_weather_units.interval}</p>
         <p>${data.current_weather_units.time}</p>
        `

        
        // document.getElementById('temp').innerText = data.current_weather.temperature;
        // document.getElementById('humidity').innerText = data.current_weather.winddirection;
    })

}

getWeather();