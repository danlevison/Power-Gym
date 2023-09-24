import React from "react"
import Image from "next/image"
import FeatureGrid from "@/components/FeatureGrid"
import QuoteSection from "@/components/QuoteSection"
import Team from "@/components/about/Team"
import Classes from "@/components/about/Classes"
import aboutImg from "../../../public/assets/about-img.jpg"
import Banner from "@/components/Banner"

const About = () => {
	return (
		<main className="w-full bg-[#FBFBFB]">
			<div className="relative top-16 md:top-0">
				<Image
					src={aboutImg}
					alt="Two women performing push-ups during a fitness workout."
					placeholder="blur"
					className="w-full h-[220px] md:h-auto max-w-full"
					style={{ objectFit: "cover", objectPosition: "center top" }}
				/>
				<div className="absolute inset-0 bg-black/50"></div>
				<h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] md:left-[30%] lg:left-[20%] text-white uppercase text-4xl sm:text-6xl md:text-8xl tracking-wide">
					About us
				</h1>
			</div>
			<section
				id="facilities"
				className="max-w-[1440px] mx-auto py-44 px-10"
			>
				<FeatureGrid
					textColour="black"
					hoverColour="accent"
					iconColour="black"
				/>
			</section>

			<QuoteSection />
			<Team />
			<Classes />
			<Banner />
		</main>
	)
}

export default About
