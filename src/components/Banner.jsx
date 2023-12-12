"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { RxDotFilled } from "react-icons/rx"

const Banner = () => {
	const sponsors = [
		"Next Sport",
		"Flex Fitness",
		"Fit Club",
		"Max Core",
		"Zenflex"
	]

	var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		swipeToSlide: true,
		customPaging: () => (
			<div className={`text-white text-2xl`}>
				<RxDotFilled className="mt-8" />
			</div>
		),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 765,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	}

	return (
		<section className="bg-accent flex justify-center items-center h-[200px] w-full">
			<Slider
				{...settings}
				className="text-center cursor-grab w-[80%]"
			>
				{sponsors.map((sponsor) => (
					<ul key={sponsor}>
						<li>
							<p className="font-[teko] font-semibold text-white uppercase text-5xl">
								{sponsor}
							</p>
						</li>
					</ul>
				))}
			</Slider>
		</section>
	)
}

export default Banner
