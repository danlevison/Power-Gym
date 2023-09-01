import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"

const SocialsBanner = () => {
  return (
    <section className="bg-accent flex flex-col justify-center items-center h-[250px] w-full">
        <h2 className="text-white uppercase text-2xl tracking-wider">Connect with us</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 mt-5">
            <div className="group bg-[#de4734] p-5 rounded-full hover:bg-white cursor-pointer">
                <FaFacebookF size={20} className="text-white group-hover:text-accent" />
                <span className="sr-only">Visit us on Facebook</span>
            </div>
            <div className="group bg-[#de4734] p-5 rounded-full hover:bg-white cursor-pointer">
                <FaTwitter size={20} className="text-white group-hover:text-accent" />
                <span className="sr-only">Follow us on Twitter</span>
            </div>
            <div className="group bg-[#de4734] p-5 rounded-full hover:bg-white cursor-pointer">
                <ImInstagram size={20} className="text-white group-hover:text-accent" />
                <span className="sr-only">Follow us on Instagram</span>
            </div>
            <div className="group bg-[#de4734] p-5 rounded-full hover:bg-white cursor-pointer">
                <FaYoutube size={20} className="text-white group-hover:text-accent" />
                <span className="sr-only">Watch us on YouTube</span>
            </div>
        </div>
    </section>
  )
}

export default SocialsBanner