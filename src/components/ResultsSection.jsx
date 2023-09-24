import React from "react"
import Image from "next/image"
import Link from "next/link"
import pulldown from "../../public/assets/pulldown.jpg"

const ResultsSection = () => {
	return (
		<section className="bg-[#1b1b1b]">
			<div className="mx-auto">
				<div className="grid md:grid-cols-2 items-center">
					<div className="w-full md:w-[80%] lg:w-[60%] mx-auto px-10 py-28">
						<h2 className="text-white text-5xl uppercase tracking-wide w-[80%]">
							Built to bring the best results
						</h2>
						<p className="leading-7 py-4">
							Condition your shoulders, legs, and lower back. Opt for a workout
							to enhance balance, strength, and overall health. Our team of
							experts will support you through the entire fitness routine. Your
							body will appreciate it.
						</p>
						<div className="mt-6">
							<Link
								href={"/about"}
								className="bg-accent py-4 px-8 text-white uppercase font-bold tracking-widest text-sm"
							>
								Learn more
							</Link>
						</div>
					</div>
					<div className="max-h-[800px]">
						<Image
							src={pulldown}
							alt="Woman performing tricep pulldowns in the gym"
							placeholder="blur"
							className="w-full"
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ResultsSection
