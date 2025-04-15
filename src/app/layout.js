import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Layout from "../components/Layout"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Soumyabrata's Website",
	description: "Website of Soumyabrata Bhattacharjee",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
