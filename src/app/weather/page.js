"use client"
import React, {useState} from "react"

export default function Weather() {
	const [city, setCity]=useState("")
	const [input, setInput]=useState("")
	const [temp, setTemp]=useState(""), [temp_feel, setTempFeel]=useState(""), [temp_max, setTempMax]=useState(""), [temp_min, setTempMin]=useState("")
	const [pressure, setPressure]=useState(""), [pressure_gnd, setPressureGnd]=useState(""), [pressure_sea, setPressureSea]=useState("")
	const [country, setCountry]=useState(""), [humidity, setHumidity]=useState(""), [speed, setSpeed]=useState("")

	function weather() {
		let source="http://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=643d74ed61652d0b3ac8bfe900c9b122"

		fetch(source)
			.then(response => response.json())
			.then(data => {
				console.log("Successfully fetched JSON")
				// temperature
				setTemp((Math.round(data.main.temp*100)-27315)/100) // current
				setTempFeel((Math.round(data.main.feels_like*100)-27315)/100) // feels like
				setTempMax((Math.round(data.main.temp_max*100)-27315)/100) // maximum
				setTempMin((Math.round(data.main.temp_min*100)-27315)/100) // minimum
				// pressure
				setPressure(data.main.pressure) // current
				setPressureGnd(data.main.grnd_level) // ground level
				setPressureSea(data.main.sea_level) // sea level
				// other
				setCity(input)
				setCountry(data.sys.country) // country
				setHumidity(data.main.humidity) // humidity
				setSpeed(data.wind.speed) // wind speed
			})
			.catch(error => console.error('Error fetching JSON:', error))
	}
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Weather</h2>
			<br/>
			<div style={{ textAlign: "center" }}>
				<input type="text" value={input} placeholder="Enter a city" onChange={(e)=>setInput(e.target.value)} required/>
				<button type="submit" onClick={weather}>Get data</button>
			</div>
			<div style={{ display: "grid", justifyContent: "center" }}>
				{temp && <h3 style={{ textAlign: "center" }}>Weather data of {city}, {country}</h3>}
				<ul>
					{temp && <li>Temperature: {temp} ℃
						<ul>
							{temp_max && <li>Maximum: {temp_max} ℃</li>}
							{temp_min && <li>Minimum: {temp_min} ℃</li>}
							{temp_feel && <li>Feels like: {temp_feel} ℃</li>}
						</ul>
					</li>}
					{humidity && <li>Humidity: {humidity}%</li>}
					{pressure && <li>Pressure: {pressure} hPa
						<ul>
							{pressure_gnd && <li>Ground: {pressure_gnd} hPa</li>}
							{pressure_sea && <li>Sea: {pressure_sea} hPa</li>}
						</ul>
					</li>}
					{speed && <li>Wind speed: {speed} m/s</li>}
				</ul>
			</div>
		</div>
	)
}