import React from "react"
import Image from "next/image"
import map from "../../../public/assets/map.jpg"

const Location = () => {
	return (
		<div className="flex flex-col w-full max-w-[600px]">
			<Image
				src={map}
				alt="Map showing gym location pinpoint"
				className="relative w-full max-w-[600px]"
			/>
			<div className="mt-7">
				<h4 className="text-[#29282D] text-xl uppercase tracking-wide">
					Address
				</h4>
				<p>Lorem ipsum dolor sit, amet consectetur</p>
			</div>
			<div className="flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between md:items-center mt-5">
				<div>
					<h4 className="text-[#29282D] text-xl uppercase tracking-wide">
						Phone
					</h4>
					<p>0203 3333 3333</p>
				</div>
				<div>
					<h4 className="text-[#29282D] text-xl uppercase tracking-wide">
						Email
					</h4>
					<p className="text-accent">power@poweronline.com</p>
				</div>
			</div>
			<p className="mt-10">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et
				magnis dis parturient montes, nascetur ridiculus mus.
			</p>
		</div>
	)
}

export default Location
