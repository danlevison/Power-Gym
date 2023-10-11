import Link from "next/link"
import React from "react"
import { BsTelephoneInbound, BsClock } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="flex flex-col justify-center items-center h-full bg-[#252525]">
			<div className="max-w-[1440px] mx-auto py-20 px-6 sm:px-10 2xl:px-0">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
					<div>
						<h3 className="text-white text-3xl uppercase">
							Power <span className="text-accent">力</span>
						</h3>
						<p className="text-[B1B2B2] py-7 w-[80%]">
							Dis sociis Theme natoque penatibus et magnis dis parturie montes,
							nascetur ridiculus mus. Curabitur ullamcorper.
						</p>
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-4">
								<BsTelephoneInbound
									size={20}
									className="hover:text-accent cursor-pointer duration-300"
								/>
								12345 678910
							</div>
							<div className="flex items-center gap-4">
								<CiLocationOn
									size={22}
									className="hover:text-accent cursor-pointer duration-300"
								/>
								<p>160 Main Street</p>
							</div>
							<div className="flex items-center gap-4">
								<BsClock
									size={20}
									className="hover:text-accent cursor-pointer duration-300"
								/>
								<p>Mon - Sat 08:00 - 22:00</p>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-white text-3xl uppercase">Latest news</h3>
						<ul className="flex flex-col gap-4">
							<li className="mt-7">
								<h4 className="text-[#717274] text-[20px] uppercase tracking-wide hover:text-white cursor-pointer duration-300">
									Fitness classes for you
								</h4>
								<p className="uppercase text-sm font-normal pb-4 border-b border-[#717274] tracking-widest">
									October 15, 2023
								</p>
							</li>
							<li>
								<h4 className="text-[#717274] text-[20px] uppercase tracking-wide hover:text-white cursor-pointer duration-300">
									The top compound lifts to grow muscle
								</h4>
								<p className="uppercase text-sm font-normal pb-4 border-b border-[#717274] tracking-widest">
									October 15, 2023
								</p>
							</li>
							<li>
								<h4 className="text-[#717274] text-[20px] uppercase tracking-wide hover:text-white cursor-pointer duration-300">
									Diet to boost performance
								</h4>
								<p className="uppercase text-sm font-normal pb-4 border-b border-[#717274] tracking-widest">
									October 15, 2023
								</p>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white text-3xl uppercase">Useful links</h3>
						<ul className="flex flex-col gap-6 mt-7">
							<li>
								<Link
									href={"/"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href={"/about"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									href={"/about#team"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									Meet the team
								</Link>
							</li>
							<li>
								<Link
									href={"/pricing"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									Pricing
								</Link>
							</li>
							<li>
								<Link
									href={"/contact"}
									className="text-[#717274] uppercase font-[teko] text-[20px] tracking-wide hover:text-white cursor-pointer duration-300"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white text-3xl uppercase">Contact</h3>
						<form className="flex flex-col gap-2 py-8">
							<label
								htmlFor="name"
								className="sr-only"
							>
								Name
							</label>
							<input
								type="text"
								placeholder="Name"
								id="name"
								className="bg-[#212121] p-3 outline-none w-full"
								aria-required
								required
							/>
							<label
								htmlFor="email"
								className="sr-only"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="E-mail"
								className="bg-[#212121] p-3 outline-none w-full"
								aria-required
								required
							/>
							<label
								htmlFor="message"
								className="sr-only"
							>
								Message
							</label>
							<textarea
								placeholder="Message"
								rows={4}
								id="message"
								className="bg-[#212121] p-3 outline-none"
								aria-required
								required
							></textarea>
							<button className="bg-accent py-3 px-4 text-white uppercase font-bold tracking-widest text-sm mt-4 w-full sm:w-[160px]">
								Send message
							</button>
						</form>
					</div>
				</div>
			</div>

			<div className="bg-[#202020] py-8 px-10 w-full text-center">
				<p>
					Copyright &copy; <span>{currentYear}</span> All rights reserved |
					Website developed by{" "}
					<a
						href={"https://danlevison.dev/"}
						target="_blank"
						className="font-bold text-[#717274] hover:text-white duration-300"
					>
						Dan Levison <span className="sr-only">Opens in a new tab</span>
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
