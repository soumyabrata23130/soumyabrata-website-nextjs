import React from "react"
import Image from "next/image"

export default function() {
	return (
		<div>
			<Image src="/Picture1.jpg" alt="Profile photo" width="200" height="260" style={{ float: "right" }}/>
			<h2>About me</h2>
			<br/>
			<p>Born in the 2000s, I am a computer science and engineering student and a tech enthusiast. Web design and development are my areas of expertise. I have mastered frontend development in HTML, CSS, and JavaScript, along with languages like C, Java and Python. I am currently learning React and Next.js. My goal is to complete my study in B. Tech and secure a challenging job where I can provide my expertise and become a seasoned professional in web development.</p>
			<br/>
			<table className="homepage-table">
				<tbody>
					<tr>
						<td rowSpan="2" width="50%">
							<h2>Academic qualifications</h2>
							<br/>
							<ul>
								<li>Bachelor of Technology in Computer Science and Engineering at Academy of Technology, affiliated to Maulana Abul Kalam Azad 	University of Technology. CGPA: 7.984 (pursuing 4th semester).</li>
								<li>Higher Secondary Examination (2023) at Burdwan Town School. Board: West Bengal Council of Higher Secondary Education. Percentage: 87.4.</li>
								<li>Madhyamik Pariksha (Secondary Examination) (2021) at Burdwan Town School. Board: West Bengal Board of Secondary Education. Percentage: 88.</li>
							</ul>
						</td>
						<td width="50%">
							<h2>Areas of expertise</h2>
							<br/>
							<ul>
								<li>Frontend: CSS, HTML, JavaScript, Next.js, React</li>
								<li>Backend: Node.js, Django</li>
								<li>Software development: C, Java, Python</li>
								<li>Graphics: Figma, FreeCAD, GIMP, Inkscape</li>
								<li>Operating systems: Windows 11, Ubuntu WSL</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>
							<h2>Personal details</h2>
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
						</td>
					</tr>
				</tbody>
			</table>
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