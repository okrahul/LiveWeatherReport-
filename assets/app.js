console.log("hello")

const weatherApi = {
	key: "732b476ec685d573b54b337c2ab7a335", 
	baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');
//Event Listener function on keypress
searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
    console.log(searchInputBox.value);
	getweatherReport(searchInputBox.value);
    }
});
//get weather report
function getweatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
	.then(weather => {
		return weather.json();
	}).then(showWeatherReport);
}

//Show weather report

function showWeatherReport(weather){
	console.log(weather);

	let city = document.getElementById('city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;


	let tempt = document.getElementById('temp');
	tempt.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;


	let minMax = document.getElementById('min-max');
	minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;c (min)/ ${Math.ceil(weather.main.temp_max)} &deg;c (max)`;


	let weatherType = document.getElementById('weather');
	weatherType.innerText = `${weather.weather[0].main}`;


	let date = document.getElementById('date');
	let todayDate = new Date();
	date.innerText = dateManage(todayDate);

	if(weatherType.textContent == 'Clouds'){
		document.body.style.backgroundImage = "url('https://images.alphacoders.com/290/290353.jpg')";
	}else if(weatherType.textContent == 'Clear'){
		document.body.style.backgroundImage = "url('https://img.wallpapersafari.com/desktop/1600/900/72/23/95A6Gz.jpg')";
	}else if(weatherType.textContent == 'Mist'){
		document.body.style.backgroundImage = "url('https://images.alphacoders.com/290/290353.jpg')";
	}else if(weatherType.textContent == 'Haze'){
		document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/88/7/fJiUa6.jpg')";
	}else if(weatherType.textContent == 'Smoke'){
		document.body.style.backgroundImage = "url('https://images.alphacoders.com/290/290353.jpg')";
	}

}

//date manage

function dateManage(dateArg){

	let days = ["Sunday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Oct","Nov","Dec"];

	let year = dateArg.getFullYear();
	let month = months[dateArg.getMonth()];
	let date = dateArg.getDate();
	let day = days[dateArg.getDay()];

	return `${date} ${month} (${day}), ${year}`;
}
