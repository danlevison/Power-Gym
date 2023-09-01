import React from 'react'

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6 w-full font-normal text-[#313646]">
        <input 
            type="text" 
            placeholder="First Name"
            className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
        />
        <input 
            type="text" 
            placeholder="Last Name"
            className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5" 
        />
        <input 
            type="tel" 
            placeholder="Phone"
            className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5" 
        />
        <input 
            type="email" 
            placeholder="Email" 
            className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
        />
        <textarea 
            placeholder="Message" 
            rows={6}
            className="bg-[#F7F7F7] placeholder:text-[#313646] py-4 px-5"
        >
        </textarea>
        <button className="bg-accent text-white text-sm uppercase tracking-widest font-bold py-4 px-3 w-full sm:w-[160px]">Send Message</button>
    </form>
  )
}

export default ContactForm