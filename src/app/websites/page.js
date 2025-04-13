import React from "react"
import Link from "next/link"

export default function Websites() {
	let date=new Date()
	let year=date.getUTCFullYear()
	let shortyear=year%100
	let fiesta=`https://www.aotfiesta${shortyear}.tech/`
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Websites</h2>
			<p>This is my collection of websites that I recommend for tech students and professionals alike.</p>
			<table className="homepage-table">
				<tbody>
					<tr>
						<td>
							<h3>Academy of Technology</h3>
							<ul>
								<li><Link href="https://aot.edu.in/">Official Website</Link></li>
								<li><Link href="https://c3it2024.aot.edu.in/">C3IT 2024</Link></li>
								<li><Link href={fiesta}>Techfiesta {year}</Link></li>
							</ul>
						</td>
						<td>
							<h3>AOT Student Groups</h3>
							<ul>
								<li><Link href="https://gdg.community.dev/gdg-on-campus-academy-of-technology-hooghly-india/">GDG On Campus</Link></li>
								<li><Link href="https://www.sccseaot.com/">Students' Chapter CSE</Link></li>
								<li><Link href="https://sc-csbs.vercel.app/">Students' Chapter CSBS</Link></li>
								<li><Link href="https://www.sceceaot.com/">Students' Chapter ECE</Link></li>
							</ul>
						</td>
						<td>
							<h3>MAKAUT Websites</h3>
							<ul>
								<li><Link href="https://makaut.wb.gov.in/">makaut.wb.gov.in (official)</Link></li>
								<li><Link href="https://makautexam.net/">makautexam.net (official)</Link></li>
								<li><Link href="https://www.makautwb.ac.in/">makautwb.ac.in (official)</Link></li>
							</ul>
						</td>
						<td>
							<h3>Programming</h3>
							<ul>
								<li><Link href="https://www.geeksforgeeks.org/">GeeksForGeeks</Link></li>
								<li><Link href="https://goalkicker.com/">Goalkicker</Link></li>
								<li><Link href="https://www.programiz.com/">Programiz</Link></li>
								<li><Link href="https://www.w3schools.com/">W3Schools</Link></li>
							</ul>
						</td>
						<td>
							<h3>Miscellaneous</h3>
							<ul>
								<li><Link href="https://lastminutesengineering.tech/">Last Minute Engineering</Link></li>
								<li><Link href="https://www.pyqonline.com/">PYQ Online</Link></li>
								<li><Link href="https://www.resourcio.in/">Resourcio Community</Link></li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}