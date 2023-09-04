"use client"

import React, {useEffect, useState} from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from "react-icons/rx"
import { RiCloseLine } from "react-icons/ri"
import { TbMenu } from "react-icons/tb"

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

  const NavLink = ({href, title, className=""}) => {
    return (
      <Link onClick={() => setNav(false)} href={href} className={`${className}`}>
        {title}
      </Link>
    )
  }

  return (
    <nav className={`fixed w-full bg-black ${scrollY === 0 ? 'md:bg-transparent' : 'md:bg-black'} h-16 z-[100]`} style={{transition: "background-color 0.4s ease"}}>
          <div className="flex justify-center items-center h-full p-10">
            <div className="flex justify-between md:justify-around items-center w-full">
                <Link
                  onClick={() => setNav(false)}
                  href={"/"}
                  className="font-[teko] text-2xl lg:text-4xl uppercase font-semibold text-white z-50"
                >
                  Power <span className="text-accent">力</span>
                </Link>
                <ul className="hidden md:flex gap-12 lg:gap-16 uppercase tracking-[0.2em] font-[teko] text-white text-sm lg:text-base">
                    <li>
                        <NavLink href={"/"} title={"Home"} className={pathname === "/" ? "text-accent py-4" : "text-white hover:text-accent py-4"} />
                    </li>
                    <li className="relative">
                        <div className="group dropdown">
                            <NavLink href={"/about"} title={"About us"} className={pathname === "/about" ? "text-accent py-4" : "text-white hover:text-accent py-4"} />
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
                        <NavLink href={"/pricing"} title={"Pricing"} className={pathname === "/pricing" ? "text-accent" : "text-white hover:text-accent"} />
                    </li>
                    <li>
                        <NavLink href={"/contact"} title={"Contact"} className={pathname === "/contact" ? "text-accent" : "text-white hover:text-accent"} />
                    </li>
                </ul>
                <button onClick={handleNav} aria-label="Open menu" className="z-50 md:hidden cursor-pointer">
                    {nav ? <RiCloseLine size={25} className="text-white" /> : <TbMenu size={25} className="text-white" />}
                </button>
            </div>
          </div>

          <div className={nav ? "md:hidden fixed top-16 w-full h-screen z-[100]" : "md:hidden"}>
              <div className={
                  nav 
                      ? "fixed w-full text-center p-10 h-screen translate-y-[0%] transition-transform duration-500 ease-in bg-[#242424] z-[100]" 
                      : "fixed p-10 w-full text-center translate-y-[-100%] transition-transform duration-300 ease-out h-screen"}
              >
                  {nav && (
                    <>
                      <div className="border-b border-primaryText mb-16">
                        <p className="w-[100%] md:w-[90%] py-4 break-words text-secondaryText tracking-widest uppercase font-light">Power<span className="text-accent">力</span></p>
                      </div>
                      <ul className="flex flex-col gap-28 uppercase text-primaryText text-sm tracking-widest">
                        <li>
                          <NavLink href={"/"} title={"Home"} className={pathname === "/" ? "text-accent" : ""} />
                        </li>
                        <li>
                          <NavLink href={"/about"} title={"About us"}  className={pathname === "/about" ? "text-accent" : ""} />
                        </li>
                        <li>
                          <NavLink href={"/pricing"} title={"Pricing"} className={pathname === "/pricing" ? "text-accent" : ""} />
                        </li>
                        <li>
                          <NavLink href={"/contact"} title={"Contact"} className={pathname === "/contact" ? "text-accent" : ""} />
                        </li>
                      </ul>
                    </>
                  )}
              </div>
          </div>
        </nav>
  )
}

export default Nav