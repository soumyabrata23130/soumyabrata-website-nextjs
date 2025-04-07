"use client"
import React, {useState} from "react"

export default function Caesar() {
	const [input, setInput]=useState("")
	const [shift, setShift]=useState("")
	const [result, setResult]=useState("")

	function caesar() {
		let output=""
		for(let i=0; i<input.length; i++) {
			let char=input[i]
			if(char>='A' && char<='Z') {
				let n=((char.charCodeAt(0) - 65 + Number(shift))%26 + 26)%26 + 65
				output+=String.fromCharCode(n)
			}
			else if(char>='a' && char<='z') {
				let n=((char.charCodeAt(0) - 97 + Number(shift))%26 + 26)%26 + 97
				output+=String.fromCharCode(n)
			}
			else {
				output+=char
			}
		}
		setResult(output)
	}
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Caesar Cipher</h2>
			<br/>
			<table style={{ margin: "auto" }}>
				<tbody>
					<tr>
						<td><label htmlFor="input">Input:</label></td>
						<td><input type="text" id="input" name="input" value={input} onChange={(e)=>setInput(e.target.value)} required/></td>
					</tr>
					<tr>
						<td><label htmlFor="shift">Shift letters:</label></td>
						<td><input type="number" id="shift" name="shift" value={shift} onChange={(e)=>setShift(e.target.value)} required/></td>
					</tr>
					<tr>
						<td colSpan="2" style={{ textAlign: "center" }}><button type="submit" id="encrypt" onClick={caesar}>Encrypt</button></td>
					</tr>
					<tr>
						<td><label htmlFor="output">Output:</label></td>
						<td><input type="text" id="output" name="output" value={result} readOnly/></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}