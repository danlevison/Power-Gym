import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { AiFillStar } from "react-icons/ai"
import pricingImg from "../../../public/assets/pricing-img.jpeg"
import QuoteSection from "@/components/QuoteSection"

const Pricing = () => {
  return (
    <main className="w-full bg-[#FBFBFB]">
        <div className="relative top-16 md:top-0">
            <Image 
                src={pricingImg}
                alt="Barbell with eight weight plates"
                placeholder="blur"
                className="w-full h-[220px] md:h-auto max-w-full"
                style={{objectFit: "cover" , objectPosition: "center top"}}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] md:left-[30%] lg:left-[25%] text-white uppercase text-4xl sm:text-6xl md:text-8xl tracking-wide">Pricing</h1>
        </div>

        <section className="py-40 px-10 w-full">
            <div className="flex flex-col justify-center items-center md:items-stretch max-w-[1240px] mx-auto">
                <div className="text-center md:text-left flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-0 w-full">
                    <h2 className="text-[#29282D] text-5xl uppercase tracking-wide w-full md:w-[40%] lg:w-[30%]">Choose your pricing plan</h2>
                    <Link 
                        href={"/contact"}
                        className="bg-accent py-4 px-8 text-white uppercase font-bold tracking-widest text-sm md:ml-auto"
                        >
                        Join now
                    </Link>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                    <div className="bg-[#29282d] text-center text-white uppercase max-w-[500px]">
                        <div className="p-10">
                            <h3 className="tracking-wide text-4xl">Standard membership</h3>
                            <h4 className="text-4xl pt-4"><span className="text-3xl mr-1">£</span>39.99 <span className="text-2xl text-accent">p/m</span></h4>
                        </div>
                        <div className="tracking-widest text-xs font-normal">
                            <p className="py-6">lorem ipsum dolor sit amet</p>
                            <p className="border-y border-black py-6">aenean massa</p>
                            <p className="py-6">quisque rutrum</p>
                        </div>
                        <div className="mt-10 pb-12">
                            <Link 
                                href={"/contact"}
                                className="bg-accent py-4 px-8 text-white uppercase font-bold tracking-widest text-sm"
                                >
                                Join now
                            </Link>
                        </div>
                    </div>

                    <div className="relative bg-[#29282d] text-center text-white uppercase max-w-[500px]">
                        <div className="p-10">
                            <h3 className="tracking-wide text-4xl">Premium membership</h3>
                            <h4 className="text-4xl pt-4"><span className="text-3xl mr-1">£</span>49.99 <span className="text-2xl text-accent">p/m</span></h4>
                        </div>
                        <div className="tracking-widest text-xs font-normal">
                            <p className="py-6">lorem ipsum dolor sit amet</p>
                            <p className="border-y border-black py-6">aenean massa</p>
                            <p className="py-6">quisque rutrum</p>
                        </div>
                        <div className="mt-10 pb-12">
                            <Link 
                                href={"/contact"}
                                className="bg-accent py-4 px-8 text-white uppercase font-bold tracking-widest text-sm"
                                >
                                Join now
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 border-solid border-t-0 border-r-[60px] border-b-[60px] border-l-0 border-[transparent_#f34e3a_transparent_transparent]" />
                        <AiFillStar size={20} className="absolute top-2 right-2" />
                    </div>

                    <div className="bg-[#29282d] text-center text-white uppercase max-w-[500px]">
                        <div className="p-10">
                            <h3 className="tracking-wide text-4xl">Platinum membership</h3>
                            <h4 className="text-4xl pt-4"><span className="text-3xl mr-1">£</span>59.99 <span className="text-2xl text-accent">p/m</span></h4>
                        </div>
                        <div className="tracking-widest text-xs font-normal">
                            <p className="py-6">lorem ipsum dolor sit amet</p>
                            <p className="border-y border-black py-6">aenean massa</p>
                            <p className="py-6">quisque rutrum</p>
                        </div>
                        <div className="mt-10 pb-12">
                            <Link 
                                href={"/contact"}
                                className="bg-accent py-4 px-8 text-white uppercase font-bold tracking-widest text-sm"
                                >
                                Join now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <QuoteSection />
    </main>
  )
}

export default Pricing