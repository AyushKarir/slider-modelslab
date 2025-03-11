import React from 'react'
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[500px] flex items-center text-white"
            style={{ backgroundImage: "url('/group.png')" }}
        >
            <div className="w-[85%]">
                <h1 className="max-w-2xl text-4xl sm:text-5xl font-bold text-black">Generate Audio in seconds <span
                    style={{
                        backgroundImage: "url('/line.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "bottom center",
                        backgroundSize: "contain",
                        display: "inline-block",
                        paddingBottom: "10px"
                    }}
                >
                    with AI
                </span></h1>
                <p className="mt-4 text-lg sm:text-xl text-black">
                    Generate audio and music with Modelslab API
                </p>
                <div className="mt-6 flex gap-4">
                    <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-6 py-3 flex items-center gap-2 rounded-full">
                        Get Started <ArrowRight size={20} />
                    </button>
                    <button className="cursor-pointer bg-gray-800 hover:bg-gray-900 px-6 py-3 flex items-center gap-2 rounded-full">
                        Watch Demo <Play size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero