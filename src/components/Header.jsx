"use client"
import { useState, useEffect } from "react"
import Logo from "./Logo"
import Nav from "./Nav"

const Header = () => {
	const [scrollY, setScrollY] = useState(0)
	const [nav, setNav] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [scrollY])

	return (
		<header
			className={`flex flex-wrap w-full items-center justify-between md:justify-around fixed top-0 h-16 py-4 z-[20] mx-auto bg-white ${
				scrollY === 0 ? "md:bg-transparent" : "md:bg-black"
			} z-[100]`}
			style={{ transition: "background-color 0.4s ease" }}
		>
			<Logo setNav={setNav} />
			<Nav
				nav={nav}
				setNav={setNav}
			/>
		</header>
	)
}

export default Header
