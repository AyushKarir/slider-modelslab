import React from 'react'
import { ArrowRight, Play, Volume2 } from "lucide-react";
import Image from 'next/image';

const Hero = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[500px] flex items-center text-white"
            style={{ backgroundImage: "url('/group.png')" }}
        >
            <div className="md:w-[85%]">

                <p className='gap-2 mb-5 text-base text-black/70 font-semibold flex items-center'> <span className='bg-[#00BCD1] rounded p-1 flex items-center'><Image cl src="volume-high.svg" height={40} width={40} className=' w-4' /></span> AudioGen   </p>
                <h1 className="max-w-2xl museo text-4xl sm:text-5xl font-bold text-black museoText " >Generate Audio in seconds <span
                    style={{
                        backgroundImage: "url('/line.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom center",
                        backgroundSize: "contain",
                        display: "inline-block",
                        paddingBottom: "10px",

                    }}

                >
                    with AI
                </span></h1>
                <p className="mt-4 text sm:text-xl text-black/70 font-medium" >
                    Generate audio and music with Modelslab API
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="font-medium text-sm cursor-pointer bg-[#00BCD1] hover:bg-[#2a858f] px-4 py-2 md:py-3 flex items-center gap-2 rounded-full">
                        Start Free Trial <Image cl src="play-circle.svg" height={40} width={40} className=' w-4' />
                    </button>
                    <button className="font-medium text-sm cursor-pointer bg-gray-800 hover:bg-gray-900 px-4 py-2 md:py-3 flex items-center gap-2 rounded-full">
                        <Image cl src="basketball.svg" height={40} width={40} className=' w-4' /> Playground
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero