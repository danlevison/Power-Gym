import React from "react"
import Image from "next/image"
import MotionHeadings from "./MotionHeadings"
import heroImg from "../../public/assets/hero-img.jpg"

const Main = () => {
	return (
		<div className="flex flex-col w-full bg-black min-h-screen">
			<div className="relative flex flex-col justify-center items-center min-h-screen">
				<MotionHeadings />
				<Image
					alt="Muscular man showcasing his back muscles."
					src={heroImg}
					placeholder="blur"
					quality={100}
					priority
					sizes="100vw"
					style={{ objectFit: "cover" }}
				/>
				<div className="absolute inset-0 bg-black/20"></div>
			</div>
		</div>
	)
}

export default Main
