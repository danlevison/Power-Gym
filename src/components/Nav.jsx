"use client"

import React, {useEffect, useState} from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from "react-icons/rx"

const Nav = () => {
  const [nav, setNav] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
  
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, [scrollY])

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className={`fixed w-full bg-white ${scrollY === 0 ? 'md:bg-transparent' : 'md:bg-black'} h-16 z-[100]`} style={{transition: "background-color 0.4s ease"}}>
          <div className="flex justify-center items-center h-full p-10">
            <div className="flex justify-between md:justify-around items-center w-full">
                <Link
                  onClick={() => setNav(false)}
                  href={"/"}
                  className="font-[teko] text-2xl lg:text-4xl uppercase font-semibold text-black md:text-white"
                >
                  Power <span className="text-accent">力</span>
                </Link>
                <ul className="hidden md:flex gap-12 lg:gap-16 uppercase tracking-[0.2em] font-[teko] text-white text-sm lg:text-base">
                    <li>
                        <Link href={"/"} className={pathname === "/" ? "text-accent py-4" : "text-white hover:text-accent py-4"}>Home</Link>
                    </li>
                    <li className="relative">
                        <div className="group dropdown">
                            <Link href={"/about"} className={pathname === "/about" ? "text-accent py-4" : "text-white hover:text-accent py-4"}>About us</Link>
                            <div className="dropdown-container pointer-events-none translate-y-[-8px] transition 150ms ease-in-out, transform 150ms ease-in-out group-hover:translate-y-0 opacity-0 group-hover:opacity-100 absolute left-[50%] translate-x-[-50%] md:top-[168%] lg:top-[150%] bg-[#1b1b1b] pt-2 md:pt-2 group-hover:pointer-events-auto">
                                <ul className="text-center text-primaryText shadow-xl">
                                    <li className="hover:text-accent">
                                        <Link href="/about#facilities" className="block py-2">What we offer</Link>
                                    </li>
                                    <li className="border-y border-black hover:text-accent">
                                        <Link href="/about#team" className="block py-2 px-14 whitespace-nowrap">Meet the team</Link>
                                    </li>
                                    <li className="hover:text-accent">
                                        <Link href="/about#classes" className="block py-2">Classes</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link href={"/pricing"} className={pathname === "/pricing" ? "text-accent" : "text-white hover:text-accent"}>Pricing</Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className={pathname === "/contact" ? "text-accent" : "text-white hover:text-accent"}>Contact</Link>
                    </li>
                </ul>
                <button onClick={handleNav} aria-label="Open menu" className="md:hidden cursor-pointer">
                    <RxHamburgerMenu size={25} className="text-black" />
                </button>
            </div>
          </div>

          <div className={nav ? "md:hidden fixed top-16 w-full h-screen z-[100]" : "md:hidden"}>
              <div className={
                  nav 
                      ? "fixed top-16 w-full text-center p-10 h-screen ease-in duration-500 bg-[#242424] z-[100]" 
                      : "fixed top-[-100%] p-10 w-full text-center ease-in duration-300 h-screen"}>
              <div>
                  <div className="flex justify-between items-center w-full">
                    
                  </div>
      
                  <div className="border-b border-primaryText my-4">
                      <p className="w-[100%] md:w-[90%] py-4 break-words text-secondaryText tracking-widest uppercase font-light">Power<span className="text-accent">力</span></p>
                  </div>
              </div>
              <div className="py-12">
              {nav && (
                  <ul onClick={handleNav} className="flex flex-col gap-20 uppercase text-primaryText text-sm tracking-widest">
                    <li>
                      <Link href={"/"} className={pathname === "/" ? "text-accent" : ""}>Home</Link>
                    </li>
                    <li>
                      <Link href={"/about"} className={pathname === "/about" ? "text-accent" : ""}>About us</Link>
                    </li>
                    <li>
                      <Link href={"/"} className={pathname === "pricing" ? "text-accent" : ""}>Pricing</Link>
                    </li>
                    <li>
                      <Link href={"/contact"} className={pathname === "contact" ? "text-accent" : ""}>Contact</Link>
                    </li>
                  </ul>
              )}
              </div>   
              </div>
          </div>
        </nav>
  )
}

export default Nav