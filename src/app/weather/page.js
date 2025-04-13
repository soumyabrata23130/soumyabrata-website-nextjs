"use client"
import Image from "next/image"
import React, {useState} from "react"
import "./styles.css"

export default function Weather() {
	const [input, setInput]=useState(""), [city, setCity]=useState(""), [description, setDescription]=useState(""), [icon, setIcon]=useState("")
	const [date, setDate]=useState("")
	const [temp, setTemp]=useState(""), [temp_feel, setTempFeel]=useState(""), [temp_max, setTempMax]=useState(""), [temp_min, setTempMin]=useState("")
	const [pressure, setPressure]=useState(""), [pressure_gnd, setPressureGnd]=useState(""), [pressure_sea, setPressureSea]=useState("")
	const [country, setCountry]=useState(""), [humidity, setHumidity]=useState(""), [speed, setSpeed]=useState("")

	function formatDate() {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]
		const WeekDays = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		]
		const today = new Date();
		setDate(`${WeekDays[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]}`)
	}

	function weather() {
		let source="http://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=643d74ed61652d0b3ac8bfe900c9b122"

		formatDate()

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
				setDescription(data.weather[0].description) // description
				setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`) // icon
				setHumidity(data.main.humidity) // humidity
				setSpeed(data.wind.speed) // wind speed
			})
			.catch(error => console.error('Error fetching JSON:', error))
	}
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Weather</h2>
			<div style={{ textAlign: "center" }}>
				<input type="text" value={input} placeholder="Enter a city" onChange={(e)=>setInput(e.target.value)} required/>
				<button type="submit" onClick={weather}>Get data</button>
			</div>
			{temp && (
				<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
					<div className="box" style={{ margin: "1.5rem", textAlign: "center" }}>
						<h3 style={{ padding: "0.5rem" }}>{city}, {country}</h3>
						<p>{date}</p>
						<div className="icon">
							<Image src={icon} width="60" height="60" alt={description} />
							{Math.round(temp)}<sup>℃</sup>
						</div>
						<div className="temp-details">
							<div style={{ display: "flex", gap: "0.6rem", justifyContent: "center" }}>
								{temp_max && <div>Max {temp_max}℃</div>}
								{temp_min && <div>Min {temp_min}℃</div>}
							</div>
							{temp_feel && <p>Feels Like {temp_feel}℃</p>}
							{humidity && <p>Humidity: {humidity}%</p>}
							{pressure && <p>Pressure: {pressure} hPa</p>}
							{speed && <p>Wind speed: {speed} m/s</p>}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}