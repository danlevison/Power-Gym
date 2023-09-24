import React from "react"
import FeatureGrid from "./FeatureGrid"

const ServicesSection = () => {
	return (
		<section className="bg-[#111111] py-44 px-10 w-full">
			<div className="max-w-[1440px] mx-auto">
				<div className="flex flex-col justify-center items-center mb-10">
					<h2 className="text-white text-center text-5xl uppercase tracking-wide">
						Push your limits forward
					</h2>
					<p className="text-center text-lg w-full md:w-[70%] py-4 mb-10">
						Train alongside top experts in the bodybuilding industry. Let your
						results do the talking. Explore cutting-edge exercise trends,
						state-of-the-art equipment, and customised nutrition strategies.
					</p>
				</div>
				<FeatureGrid
					textColour="white"
					hoverColour="accent"
					iconColour="accent"
				/>
			</div>
		</section>
	)
}

export default ServicesSection
