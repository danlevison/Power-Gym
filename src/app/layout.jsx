import "./styles/globals.css"
import { Ubuntu } from "next/font/google"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: ["300", "400"]
})

export const metadata = {
	title: "Power 力 | Gym",
	description:
		"Power Gym: Your professional fitness facility with diverse equipment, classes, and perks. Achieve your fitness goals at our commercial gym. Join us now!"
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={ubuntu.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
