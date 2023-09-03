"use client"

import React from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import heroImg from "../../public/assets/hero-img.jpg"

const Main = () => {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen" >
      <div className="relative flex flex-col justify-center items-center min-h-screen">
            <Image 
                alt="Muscular man showcasing his back muscles."
                src={heroImg}
                placeholder="blur"
                quality={100}
                priority
                fill
                sizes="100vw"
                className="w-full"
                style={{objectFit: "cover"}}
            />
            <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>
            <div className="select-none flex justify-center items-center">
                <motion.h1
                  initial={{ y: -100, opacity: 0 }}
                  animate={{y: 0, opacity: 100 }}
                  transition={{ duration: 0.2, delay: 0.2}}  
                  className="absolute top-44 md:left-[10%] text-6xl xs:text-7xl md:text-8xl lg:text-9xl tracking-[0.3em] text-accent uppercase"
                >
                    Power
                </motion.h1>
                <motion.h2
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  transition={{ duration: 0.2, delay: 0.5}} 
                  className="absolute top-[13rem] xs:top-[13.5rem] md:top-[14.5rem] md:left-[11%] lg:top-64 w-[260px] md:w-[350px] uppercase text-xl md:text-2xl text-white md:tracking-wide leading-9 text-center md:text-left xs:mr-5 md:mr-0"
                >
                  Break free from the routine. Train like world champions and achieve your peak fitness level.
                </motion.h2>
                <motion.h2
                  initial={{ y: 500, opacity:0, rotate: 90 }}
                  animate={{ y: 0, opacity: 100, rotate: 90 }}
                  transition={{ delay: 1.0 }}
                  className="hidden lg:block absolute top-[10%] right-[-5%] uppercase text-white text-5xl transform rotate-90 origin-left w-[300px]"
                >
                    What we have to offer
                </motion.h2>
            </div>
      </div>
    </div>
  )
}

export default Main