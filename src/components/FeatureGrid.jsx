import React from "react"
import { CiDumbbell } from "react-icons/ci"
import { BsHeartPulse, BsWater } from "react-icons/bs"
import { LuApple } from "react-icons/lu"

const FeatureGrid = ({ textColour, hoverColour, iconColour }) => {
	const textColourVariants = {
		black: "text-black",
		white: "text-white"
	}
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
			<div className="flex flex-col justify-center items-center">
				<CiDumbbell
					size={60}
					role="presentation"
					className={`text-${iconColour}`}
				/>
				<h3
					className={`${textColourVariants[textColour]} uppercase text-xl py-4 tracking-wide hover:text-${hoverColour} duration-300 cursor-pointer`}
				>
					Quality equipment
				</h3>
				<p className="w-[70%] leading-7">
					Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
					libero, sit amet adipisc.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center">
				<LuApple
					size={60}
					role="presentation"
					className={`text-${iconColour}`}
				/>
				<h3
					className={`text-${textColour} uppercase text-xl py-4 tracking-wide hover:text-${hoverColour} duration-300 cursor-pointer`}
				>
					Customised nutrition plans
				</h3>
				<p className="w-[70%] leading-7">
					Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
					libero, sit amet adipisc.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center">
				<BsWater
					size={60}
					role="presentation"
					className={`text-${iconColour}`}
				/>
				<h3
					className={`text-${textColour} uppercase text-xl py-4 tracking-wide hover:text-${hoverColour} duration-300 cursor-pointer`}
				>
					Shower service
				</h3>
				<p className="w-[70%] leading-7">
					Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
					libero, sit amet adipisc.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center">
				<BsHeartPulse
					size={60}
					role="presentation"
					className={`text-${iconColour}`}
				/>
				<h3
					className={`text-${textColour} uppercase text-xl py-4 tracking-wide hover:text-${hoverColour} duration-300 cursor-pointer`}
				>
					Unique to your needs
				</h3>
				<p className="w-[70%] leading-7">
					Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
					libero, sit amet adipisc.
				</p>
			</div>
		</div>
	)
}

export default FeatureGrid
