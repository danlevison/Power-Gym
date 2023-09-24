import React from "react"

const ContactForm = () => {
	return (
		<form className="flex flex-col gap-6 w-full font-normal text-[#313646]">
			<label
				htmlFor="firstName"
				className="sr-only"
			>
				First name
			</label>
			<input
				type="text"
				placeholder="First Name"
				id="firstName"
				required
				aria-required
				className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
			/>
			<label
				htmlFor="lastName"
				className="sr-only"
			>
				Last name
			</label>
			<input
				type="text"
				placeholder="Last Name"
				id="lastName"
				required
				aria-required
				className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
			/>
			<label
				htmlFor="phone"
				className="sr-only"
			>
				Phone number
			</label>
			<input
				type="tel"
				placeholder="Phone"
				id="phone"
				required
				aria-required
				className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
			/>
			<label
				htmlFor="email"
				className="sr-only"
			>
				Email
			</label>
			<input
				type="email"
				placeholder="Email"
				id="email"
				required
				aria-required
				className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
			/>
			<label
				htmlFor="message"
				className="sr-only"
			>
				Message
			</label>
			<textarea
				placeholder="Message"
				rows={6}
				id="message"
				required
				aria-required
				className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
			></textarea>
			<button className="bg-accent text-white text-sm uppercase tracking-widest font-bold py-4 px-3 w-full sm:w-[160px]">
				Send Message
			</button>
		</form>
	)
}

export default ContactForm
