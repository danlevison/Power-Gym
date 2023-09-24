import React from "react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"
import trainer1 from "../../../public/assets/trainer-1.jpg"
import trainer2 from "../../../public/assets/trainer-2.jpg"
import trainer3 from "../../../public/assets/trainer-3.jpg"
import trainer4 from "../../../public/assets/trainer-4.jpg"

const Team = () => {
	const team = [
		{
			name: "Maria Smith",
			expertise: "Crossfit expert",
			image: trainer1,
			alt: "Maria Smith, Certified Personal Trainer"
		},
		{
			name: "Chris Smith ",
			expertise: "Powerlifting expert",
			image: trainer2,
			alt: "Chris Smith, Certified Personal Trainer"
		},
		{
			name: "Grace Smith",
			expertise: "Cardio trainer",
			image: trainer3,
			alt: "Grace Smith, Certified Personal Trainer"
		},
		{
			name: "Michael Smith",
			expertise: "Combat trainer",
			image: trainer4,
			alt: "Michael Smith, Certified Personal Trainer"
		}
	]

	return (
		<section
			id="team"
			className="w-full min-h-screen"
		>
			<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-center md:text-left pt-40 pb-20 px-10">
				<h2 className="text-4xl md:text-5xl uppercase tracking-wide text-[#29282D] w-full md:w-[310px]">
					Meet our strongest team
				</h2>
				<Link
					href={"/about#team"}
					className="bg-accent py-4 px-8 text-white uppercase font-bold tracking-widest text-sm"
				>
					Learn more
				</Link>
			</div>

			<ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
				{team.map((trainer) => (
					<li
						key={trainer.name}
						className="relative group"
					>
						<Image
							src={trainer.image}
							alt={trainer.alt}
						/>
						<div className="group-hover:absolute inset-0 bg-black/70"></div>
						<div className="hidden group-hover:block group-hover:absolute top-[50%] left-[50%] translate-x-[-50%] text-center">
							<h3 className="text-white text-2xl uppercase tracking-wide hover:text-accent duration-300 cursor-pointer">
								{trainer.name}
							</h3>
							<p className="py-2 uppercase text-white text-sm tracking-widest">
								{trainer.expertise}
							</p>
							<div className="mt-2 flex justify-center items-center gap-4 text-white">
								<FaFacebookF
									size={25}
									className="hover:text-accent duration-300 cursor-pointer"
								/>
								<FaTwitter
									size={25}
									className="hover:text-accent duration-300 cursor-pointer"
								/>
								<ImInstagram
									size={25}
									className="hover:text-accent duration-300 cursor-pointer"
								/>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Team
