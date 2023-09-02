"use client"

import React from 'react'
import Image from "next/image"
import { usePathname } from 'next/navigation'
import  Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../app/styles/slick.css"
import { SlArrowRight, SlArrowLeft } from "react-icons/sl"
import { BiSolidQuoteLeft } from "react-icons/bi"
import runner from "../../public/assets/runner.jpeg"

const QuoteSection = () => {
  const pathname = usePathname()

  const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="hidden md:block custom-prev-arrow" aria-label="Previous">
      <SlArrowLeft size={50} className="text-white" />
    </button>
  )

  const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick} className="hidden md:block custom-next-arrow" aria-label="Next">
      <SlArrowRight size={50} className="text-white" />
    </button>
  )

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  }

  return (
    <section className="relative w-full">
      {pathname === "/" ? (
        <Image 
            alt="Close-up of running shoes with water droplets, capturing a person running on a damp pavement with water spray in motion."
            src={runner}
            quality={80}
            style={{objectFit: "cover"}}
            className="relative h-[600px] w-full"
        />
      )
      :
        <div className="relative bg-accent w-full h-[600px]" />
      }
     

        <div className="absolute top-0 left-[50%] translate-x-[-50%] flex justify-center items-center h-full w-full">
          <Slider {...settings} className="cursor-grab z-[100] max-w-[100%]">
          <div className="text-center mx-auto w-full px-5 xs:px-10">
                <BiSolidQuoteLeft size={40} aria-hidden="true" className="text-white flex justify-center w-full mb-12" />
                <blockquote>
                  <p className="font-[teko] text-white text-2xl md:text-4xl uppercase tracking-wide text-center w-full lg:w-[60%] mx-auto leading-snug">Reaching an age where prioritizing fitness and health matters most. Our bodies rely on us! Initiate self-care for your body, and it reciprocates. Embrace a clean diet and intense exercise.</p>
                  <p className="text-white uppercase tracking-widest mt-12 font-normal">John Smith, Nutritionist</p>
                </blockquote>
            </div>

            <div className="text-center mx-auto w-full px-5 xs:px-10">
                <BiSolidQuoteLeft size={40} aria-hidden="true" className="text-white flex justify-center w-full mb-12" />
                <blockquote>
                  <p className="font-[teko] text-white text-2xl md:text-4xl uppercase tracking-wide text-center w-full lg:w-[60%] mx-auto leading-snug">Reaching an age where prioritizing fitness and health matters most. Our bodies rely on us! Initiate self-care for your body, and it reciprocates. Embrace a clean diet and intense exercise.</p>
                  <p className="text-white uppercase tracking-widest mt-12 font-normal">John Smith, Nutritionist</p>
                </blockquote>
            </div>
          </Slider>
        </div>
    </section>
  )
}

export default QuoteSection