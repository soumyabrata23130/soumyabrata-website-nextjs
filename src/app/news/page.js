"use client"
import React, {useState} from "react"
import Link from "next/link"

export default function News() {
	const [topic, setTopic]=useState(""), [input, setInput]=useState(""), [results, getResults]=useState("")
	const [source, getSource]=useState(""), [headline, getHeadline]=useState(""), [content, getContent]=useState("")
	const [url, getURL]=useState("")
	
	function news() {
		let today=new Date()
		let date=today.getDate()

		let source="https://newsapi.org/v2/everything?q="+input+"&from="+date+"&language=en&sortBy=publishedAt&apiKey=f188a00c3ada462695f59da69906d1d5"

		fetch(source)
			.then(response => response.json())
			.then(data => {
				console.log("Successfully fetched JSON")
				setTopic(input)
				getResults(data.totalResults)
				getSource(data.articles[0].source.name), getHeadline(data.articles[0].title), getContent(data.articles[0].description)
				getURL(data.articles[0].url)
			})
			.catch(error => console.error('Error fetching JSON:', error))
	}
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>News</h2>
			<br/>
			<div style={{ textAlign: "center" }}>
				<input type="text" value={input} placeholder="Enter a topic" onChange={(e)=>setInput(e.target.value)} required/>
				<button type="submit" onClick={news}>Get news</button>
			</div>
			<div style={{ display: "grid", justifyContent: "center" }}>
				{results && <h3 style={{ textAlign: "center" }}>News about {topic}</h3>}
				{results && <div className="box">
					{headline && <h4><Link href={url}>{headline}</Link> {source && <span style={{ fontWeight: "normal" }}> — {source}</span>}</h4>}
					<p>{content && content}</p>
				</div> }
			</div>
		</div>
	)
}