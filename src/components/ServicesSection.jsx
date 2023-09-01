import React from 'react'
import FeatureGrid from "./FeatureGrid"

const ServicesSection = () => {
  return (
    <section className="bg-[#111111] py-44 px-10 w-full">
        <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col justify-center items-center mb-10">
                <h2 className="text-white text-center text-5xl uppercase tracking-wide">Push your limits forward</h2>
                <p className="text-center text-lg w-[70%] py-4 mb-10">Train with the best experts in the bodybuilding field. Your results will speak for themselves. Try the latest exercising trends, innovative equipment and special nutrition plans.</p>
            </div>
            <FeatureGrid textColour="white" hoverColour="accent" iconColour="accent" />
        </div>
    </section>
  )
}

export default ServicesSection