"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RiCloseLine } from "react-icons/ri"
import { TbMenu } from "react-icons/tb"

const Nav = ({ nav, setNav }) => {
	const pathname = usePathname()

	const NavLink = ({ href, title, className = "" }) => {
		return (
			<Link
				onClick={() => setNav(false)}
				href={href}
				className={`${className}`}
			>
				{title}
			</Link>
		)
	}

	return (
		<>
			<nav className="flex justify-end md:w-1/2 xl:w-1/3 px-8">
				<ul className="hidden w-full md:flex justify-between gap-5 uppercase tracking-[0.2em] font-[teko] text-white text-sm lg:text-base">
					<li>
						<NavLink
							href={"/"}
							title={"Home"}
							className={
								pathname === "/"
									? "text-accent py-4"
									: "text-white hover:text-accent py-4"
							}
						/>
					</li>
					<li className="relative">
						<div className="group dropdown">
							<NavLink
								href={"/about"}
								title={"About us"}
								className={
									pathname === "/about"
										? "text-accent pb-7"
										: "text-white hover:text-accent pb-7"
								}
							/>
							<div className="dropdown-container pointer-events-none translate-y-[-8px] transition 150ms ease-in-out, transform 150ms ease-in-out group-hover:translate-y-0 opacity-0 group-hover:opacity-100 absolute left-[50%] translate-x-[-50%] md:top-[208%] lg:top-[165%] bg-[#1b1b1b] pt-2 md:pt-2 group-hover:pointer-events-auto">
								<ul className="text-center text-primaryText shadow-xl">
									<li className="hover:text-accent">
										<Link
											href="/about#facilities"
											className="block py-2"
										>
											What we offer
										</Link>
									</li>
									<li className="border-y border-black hover:text-accent">
										<Link
											href="/about#team"
											className="block py-2 px-14 whitespace-nowrap"
										>
											Meet the team
										</Link>
									</li>
									<li className="hover:text-accent">
										<Link
											href="/about#classes"
											className="block py-2"
										>
											Classes
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li>
						<NavLink
							href={"/pricing"}
							title={"Pricing"}
							className={
								pathname === "/pricing"
									? "text-accent"
									: "text-white hover:text-accent"
							}
						/>
					</li>
					<li>
						<NavLink
							href={"/contact"}
							title={"Contact"}
							className={
								pathname === "/contact"
									? "text-accent"
									: "text-white hover:text-accent"
							}
						/>
					</li>
				</ul>
				<button
					onClick={() => setNav(!nav)}
					aria-label="Open menu"
					className="z-50 md:hidden cursor-pointer"
				>
					{nav ? (
						<RiCloseLine
							size={25}
							className="text-black"
						/>
					) : (
						<TbMenu
							size={25}
							className="text-black"
						/>
					)}
				</button>
			</nav>

			{nav && (
				<ul className="md:hidden flex flex-col items-center basis-full gap-5 uppercase bg-white border-b border-gray-300 text-primaryText text-sm tracking-widest pt-8 pb-4">
					<li className="border-b w-2/3 text-center pb-4">
						<NavLink
							href={"/"}
							title={"Home"}
							className={pathname === "/" ? "text-accent" : ""}
						/>
					</li>
					<li className="border-b w-2/3 text-center pb-4">
						<NavLink
							href={"/about"}
							title={"About us"}
							className={pathname === "/about" ? "text-accent" : ""}
						/>
					</li>
					<li className="border-b w-2/3 text-center pb-4">
						<NavLink
							href={"/pricing"}
							title={"Pricing"}
							className={pathname === "/pricing" ? "text-accent" : ""}
						/>
					</li>
					<li>
						<NavLink
							href={"/contact"}
							title={"Contact"}
							className={pathname === "/contact" ? "text-accent" : ""}
						/>
					</li>
				</ul>
			)}
		</>
	)
}

export default Nav
