import React from 'react'
import Image from "next/image"
import heroImg from "../../public/assets/hero-img.jpeg"

const Main = () => {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen" >
      <div className="flex justify-center items-center min-h-screen">
            <Image 
                alt="Muscular man showcasing his back muscles."
                src={heroImg}
                placeholder="blur"
                quality={100}
                priority
                fill
                style={{objectFit: "cover"}}
            />
            <div>
                <h1 className="absolute top-44 left-[50%] translate-x-[-50%] md:left-[10%] md:translate-x-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.3em] text-accent uppercase">Power</h1>
                <h2 className="absolute top-[13rem] left-[50%] translate-x-[-50%] sm:top-[13.5rem] md:top-[14.5rem] md:left-[30%] lg:top-64 lg:left-[28%] xl:left-[25%] 2xl:left-[20%] w-[260px] md:w-[350px] uppercase text-xl md:text-2xl text-white md:tracking-wide">Beat the routine. Train at the caliber of world champions and get in the best shape of your life.</h2>
                <h2 className="hidden lg:block absolute top-[10%] right-[-5%] uppercase text-white text-5xl transform rotate-90 origin-left w-[300px]">What we have to offer</h2>
            </div>
      </div>
    </div>
  )
}

export default Main