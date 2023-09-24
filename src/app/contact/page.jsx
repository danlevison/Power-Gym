import React from "react"
import Image from "next/image"
import ContactForm from "@/components/contact/ContactForm"
import Location from "@/components/contact/Location"
import SocialsBanner from "@/components/contact/SocialsBanner"
import contactImg from "../../../public/assets/contact-img.jpg"

const Contact = () => {
	return (
		<main className="w-full">
			<div className="relative top-16 md:top-0">
				<Image
					src={contactImg}
					alt="Gym interior with exercise equipment"
					placeholder="blur"
					className="w-full h-[220px] md:h-auto max-w-full"
					style={{ objectFit: "cover", objectPosition: "center top" }}
				/>
				<div className="absolute inset-0 bg-black/60"></div>
				<h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] md:left-[30%] lg:left-[25%] text-white uppercase text-4xl sm:text-6xl md:text-8xl tracking-wide text-center">
					Contact us
				</h1>
			</div>
			<section className="max-w-[1440px] mx-auto flex flex-col gap-10 md:flex-row py-24 px-10">
				<Location />
				<ContactForm />
			</section>
			<SocialsBanner />
		</main>
	)
}

export default Contact
