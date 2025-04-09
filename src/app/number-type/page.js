"use client"
import React, {useState} from "react"

export default function NumberType()  {
	const [input, setInput]=useState("")
	const [type, setType]=useState("")
	const [result, setResult]=useState("")

	function factorial(n) {
		if(n==0) {
			return 1
		}
		else {
			return n*factorial(n-1)
		}
	}

	function findType() {
		let i, num, remainder, sum
		switch(type) {
			case "armstrong":
				if(input<0) {
					setInput(-input)
				}
				num=Number(input), remainder=0, sum=0
				while(num!==0) {
					remainder=num%10
					sum+=Math.pow(remainder, String(input).length)
					num=Math.floor(num/10)
				}
				{sum==input ? setResult("Yes") : setResult("No")}
				break

			case "even-odd":
				if(input<=0) {
					setResult("None")
					break
				}
				let isEven=false
				for(i=0; i<input; i++) {
					if(input%2===0) {
						isEven=true
						break
					}
				}
				{isEven ? setResult("Even") : setResult("Odd")}
				break
			
			case "leap":
				let isLeap=false
				if(input%400===0) {
					isLeap=true
				}
				else if(input%4===0 && input%100!==0) {
					isLeap=true
				}
				else {
					isLeap=false
				}
				{isLeap ? setResult("Yes") : setResult("No")}
				break

			case "palindrome":
				if(input<0) {
					setInput(-input)
				}
				num=Number(input), remainder=0, sum=0
				while(num!==0) {
					remainder=num%10
					sum=sum*10+remainder
					num=Math.floor(num/10)
				}
				{sum==input ? setResult("Yes") : setResult("No")}
				break

			case "perfect":
				if(input<0) {
					setResult("No")
					break
				}
				sum=1
				for(i=2; Math.pow(i, 2)<=input; i++) {
					if(input%i===0) {
						if(Math.pow(i, 2)!==input) {
							sum+=i+input/i
						}
						else {
							sum+=i
						}
					}
				}
				console.log(sum)
				{sum==input ? setResult("Yes") : setResult("No")}
				break
			
			case "prime":
				if(input<=1) {
					setResult("No")
					break
				}
				let isPrime=true
				for(i=2; i<=Math.sqrt(input); i++) {
					if(input%i===0) {
						isPrime=false
						break
					}
				}
				{isPrime ? setResult("Yes") : setResult("No")}
				break
			
			case "strong":
				if(input<0) {
					setInput(-input)
				}
				num=Number(input), remainder=0, sum=0
				while(num!==0) {
					remainder=num%10
					sum+=factorial(remainder)
					num=Math.floor(num/10)
				}
				{sum==input ? setResult("Yes") : setResult("No")}
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
						<td><label htmlFor="shift">Is the number</label></td>
						<td><select name="type" value={type} placeholder="select" onChange={(e)=>setType(e.target.value)} required>
						<option value="select">select</option>
							<option value="armstrong">Armstrong</option>
							<option value="even-odd">even or odd</option>
							<option value="leap">leap year</option>
							<option value="palindrome">palindrome</option>
							<option value="perfect">perfect</option>
							<option value="prime">prime</option>
							<option value="strong">strong</option>
						</select>?</td>
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