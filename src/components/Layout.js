import React from "react"
import Link from "next/link"
import "./styles.css"

export default function Layout({children}) {
	return (
		<div>
			<header>
				<h2 style={{ margin: "0", textAlign: "left" }}><Link href="/">Soumya's Website</Link></h2>
				<nav style={{ display: "flex",  gap: "1rem" }}>
					<Link href="/caesar">Caesar Cipher</Link>
					<Link href="/number-type">Number Type Checker</Link>
					<Link href="/weather">Weather</Link>
				</nav>
			</header>
			<main style={{ minHeight: "30rem", padding: "1rem" }}>
    			{children}
    		</main>
			<footer>
				<nav style={{ display: "flex",  gap: "1rem", justifyContent: "center" }}>
					<p>Contact:</p>
					<Link href="mailto:soumyabrata8974@gmail.com">Email</Link>
					<Link href="tel:+917908876512">Phone</Link>
					<Link href="https://www.facebook.com/soumyabrata.bhattacharjee.58">Facebook</Link>
					<Link href="https://github.com/soumyabrata2006">GitHub</Link>
					<Link href="https://www.instagram.com/soumyabrata.06">Instagram</Link>
					<Link href="https://www.linkedin.com/in/soumyabrata-bhattacharjee-8a3aa5308">LinkedIn</Link>
					<Link href="https://x.com/soumyabhatta_of">X</Link>
				</nav>
				<br/>
				<p>Copyright © 2022-2025 Soumyabrata Bhattacharjee</p>
			</footer>
		</div>
	)
}