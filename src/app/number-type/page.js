"use client"
import React, {useState} from "react"

export default function NumberType()  {
	const [input, setInput]=useState("")
	const [type, setType]=useState("")
	const [result, setResult]=useState("")

	function findType() {
		switch(type) {
			case "armstrong":
				if(input<0) {
					setInput(-input)
				}
				let num=input, remainder=0, sum=0
				while(num!=0) {
					remainder=num%10
					sum+=Math.pow(remainder, input.length)
					num/=10
					console.log(num)
				}
				console.log(remainder===input)
				{remainder===input ? setResult("Yes") : setResult("No")}
				break

			case "even-odd":
				if(input<0) {
					setResult("None")
					return
				}
				let isEven=false
				for(let i=0; i<input; i++) {
					if(input%2===0) {
						isEven=true
						break
					}
				}
				{isEven ? setResult("Even") : setResult("Odd")}
				break

			case "prime":
				if(input<=1) {
					setResult("No")
					return
				}
				let isPrime=true
				for(let i=2; i<=Math.sqrt(input); i++) {
					if(input%i===0) {
						isPrime=false
						break
					}
				}
				{isPrime ? setResult("Yes") : setResult("No")}
				break
			default:
				setResult("Error")
		}
	}
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Number Type Checker</h2>
			<br/>
			<table style={{ margin: "auto" }}>
				<tbody>
					<tr>
						<td><label htmlFor="input">Enter a number:</label></td>
						<td><input type="text" name="input" value={input} onChange={(e)=>setInput(e.target.value)} required/></td>
					</tr>
					<tr>
						<td><label htmlFor="shift">Find whether the number is</label></td>
						<td><select name="type" value={type} onChange={(e)=>setType(e.target.value)} required>
							<option value="armstrong">Armstrong</option>
							<option value="even-odd">even or odd</option>
							<option value="perfect">perfect</option>
							<option value="prime">prime</option>
							<option value="strong">strong</option>
						</select></td>
					</tr>
					<tr>
						<td colSpan="2" style={{ textAlign: "center" }}><button type="submit" onClick={findType}>Find</button></td>
					</tr>
					<tr>
						<td>Output:</td>
						<td>{result && <p>{result}</p>}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}