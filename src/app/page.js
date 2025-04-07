import React from "react"
import Image from "next/image"

export default function() {
	return (
		<div>
			<Image src="/Picture1.jpg" alt="Profile photo" width="260" height="312" style={{ float: "right" }}/>
			<h2>About me</h2>
			<br/>
			<p>Born in the 2000s, I am a computer science and engineering student and a tech enthusiast. Web development is my area of expertise. I have mastered C, Java, and Python programming languages, along with frontend development in HTML, CSS, and JavaScript. I am currently learning React and Next.js. My goal is to complete my study in B. Tech and secure a challenging job where I can provide my expertise and become a seasoned professional in web development.</p>
			<br/>
			<h2>Academic qualifications</h2>
			<br/>
			<table className="qualifications">
				<thead>
					<tr>
						<th>Degree/Examination</th>
						<th>Institution</th>
						<th>Board/University</th>
						<th>Grade</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Bachelor of Technology in<br/>Computer Science and Engineering</td>
						<td>Academy of Technology</td>
						<td>Maulana Abul Kalam Azad University of Technology</td>
						<td>CGPA: 7.984<br/>(pursuing 2nd year)</td>
					</tr>
					<tr>
						<td>Higher Secondary Examination</td>
						<td>Burdwan Town School</td>
						<td>West Bengal Council of Higher Secondary Education</td>
						<td>87.4%</td>
					</tr>
					<tr>
						<td>Madhyamik Pariksha<br/>(Secondary Examination)</td>
						<td>Burdwan Town School</td>
						<td>West Bengal Board of Secondary Education</td>
						<td>88%</td>
					</tr>
				</tbody>
			</table>
			<br/>
			<h2>Areas of expertise</h2>
			<br/>
			<ul>
				<li>Frontend: HTML, CSS, JavaScript, React, Next.js</li>
				<li>Backend: Node.js, Django</li>
				<li>Software development: C, Python, Java</li>
				<li>Graphics: Figma, FreeCAD, Inkscape, GIMP</li>
				<li>Operating systems: Windows 11</li>
			</ul>
			<br/>
			<h2>Personal details</h2>
			<br/>
				<ul>
					<li>Name: Soumyabrata Bhattacharjee</li>
					<li>Father: Rajesh Bhattacharjee</li>
					<li>Mother: Papiya Bhattacharya</li>
					<li>Address: Natunpally, Ward 8, P.O. Burdwan-713101</li>
					<li>District: Purba Bardhaman</li>
					<li>State: West Bengal, India</li>
					<li>Birthday: 27 May</li>
					<li>Languages: Bengali (first), English (second), Hindi</li>
				</ul>
		</div>
	)
}

/*import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
*/