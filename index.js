const options= {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01ecf72f4bmsh07046154a77e8e1p1c585fjsna0648fedaf91',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
	}
};
const getWeather=(city)=>{
	cityname.innerHTML=city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response=> {
		console.log(response)
	temp.innerHTML = response.temp
	temp2.innerHTML = response.temp
	feels_like.innerHTML = response.feels_like
	humidity.innerHTML = response.humidity
	humidity2.innerHTML = response.humidity

	min_temp.innerHTML = response.min_temp
	max_temp.innerHTML = response.max_temp
	wind_speed.innerHTML = response.wind_speed
	wind_speed2.innerHTML = response.wind_speed

	wind_degrees.innerHTML = response.wind_degrees
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset
	})

	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("delhi")


const getWeatherkolkata=(city1)=>{



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ "kolkata", options)
	.then(response => response.json())
	.then(response=> {
		console.log(response)
		cloud_pct.innerHTML=response.cloud_pct
	tempkol.innerHTML = response.temp
	feels_likekol.innerHTML = response.feels_like
	humiditykol.innerHTML = response.humidity

	min_tempkol.innerHTML = response.min_temp
	max_tempkol.innerHTML = response.max_temp
	wind_speedkol.innerHTML = response.wind_speed

	wind_degreeskol.innerHTML = response.wind_degrees
	sunrisekol.innerHTML = response.sunrise
	sunsetkol.innerHTML = response.sunset
	})

	.catch(err => console.error(err));
}
getWeatherkolkata("kolkata")