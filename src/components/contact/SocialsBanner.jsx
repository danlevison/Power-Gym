import React from "react"
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"

const SocialsBanner = () => {
	const socials = [
		{
			name: "Facebook",
			icon: (
				<FaFacebookF
					size={20}
					className="text-white group-hover:text-accent duration-300"
				/>
			),
			srText: "Visit us on Facebook"
		},
		{
			name: "Twitter",
			icon: (
				<FaTwitter
					size={20}
					className="text-white group-hover:text-accent duration-300"
				/>
			),
			srText: "Follow us on Twitter"
		},
		{
			name: "Instagram",
			icon: (
				<ImInstagram
					size={20}
					className="text-white group-hover:text-accent duration-300"
				/>
			),
			srText: "Follow us on Instagram"
		},
		{
			name: "YouTube",
			icon: (
				<FaYoutube
					size={20}
					className="text-white group-hover:text-accent duration-300"
				/>
			),
			srText: "Watch us on YouTube"
		}
	]

	return (
		<section className="bg-accent flex flex-col justify-center items-center h-[250px] w-full">
			<h2 className="text-white uppercase text-2xl tracking-wider">
				Connect with us
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-7 mt-5">
				{socials.map((social) => (
					<div
						key={social.name}
						className="group bg-[#de4734] p-5 rounded-full hover:bg-white duration-300 cursor-pointer"
					>
						{social.icon}
						<span className="sr-only">{social.srText}</span>
					</div>
				))}
			</div>
		</section>
	)
}

export default SocialsBanner
