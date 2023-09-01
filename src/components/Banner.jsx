"use client"

import React from 'react'
import  Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Banner = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }

  return (
    <section className="bg-accent flex justify-center items-center h-[200px] w-full">
            <Slider {...settings} className="text-center cursor-grab w-[80%]">
                <div>
                    <h2 className="text-white uppercase text-5xl">Next Sport</h2>
                </div>
                <div>
                    <h2 className="text-white uppercase text-5xl">Flex Fitness</h2>
                </div>
                <div>
                    <h2 className="text-white uppercase text-5xl">Fit Club</h2>
                </div>
                <div>
                    <h2 className="text-white uppercase text-5xl">Max Core</h2>
                </div>
                <div>
                    <h2 className="text-white uppercase text-5xl">ZenFlex</h2>
                </div>
            </Slider>
    </section>
  )
}

export default Banner