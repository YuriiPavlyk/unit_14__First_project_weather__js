const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "c9fc7b202b82e08ab7d2a6d53374283e"
}

function getWeather() {
    const city = document.querySelector('.city').value;
    fetch(`${param.url}weather?q=${city}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}


function showWeather(data) {
	console.log(data);
    document.querySelector('.temp').innerHTML = 'Temperature'+ ' ' + Math.round(data.main.temp) + '&deg';
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.description').innerHTML = data.weather[0]['description'];
    document.querySelector('.wind').textContent = `wind   ${data.wind.deg}` 
    document.querySelector('.speed').innerHTML =`wind speed ${data.wind.speed}` ;
    document.querySelector('.pressure').innerHTML = `pressure ${data.main.pressure}` ;

}

getWeather();
document.querySelector('.city').onchange = getWeather;
