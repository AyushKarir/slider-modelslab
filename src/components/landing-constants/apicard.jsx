"use client";

import Image from "next/image";

const ApiFeatureCard = () => {
    return (
        <div className="relative w-full max-w-6xl mx-auto p-6 rounded-lg border-2 bg-[#12191A] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/constants/abstract.svg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className=""
                />
            </div>

            {/* Gradient Overlay */}
            <div className="relative z-10  p-6 rounded-lg">
                <div className="flex gap-8 items-center">
                    {/* Code Block */}
                    <div className="bg-black/80 bg-[linear-gradient(180deg,rgba(0,32,35,0.5)_0%,rgba(0,118,131,0.5)_100%)] font-mono p-4 rounded-lg text-lg">
                        <pre className="text-white">
                            {`var request = require('request');
var options = {
  method: 'POST',
  url: 'https://modelslab.com/api/v6/voice/text_to_audio',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    key: "",
    prompt: ""
  })
};`}
                        </pre>
                    </div>

                    {/* Text Content */}
                    <div className="text-white space-y-4">
                        <h2 className=" font-bold leading-tight museoText text-5xl">
                            APIs that move, scale, and adapt to your code
                        </h2>
                        <p className="text-gray-300 text-sm">
                            The ModelsLab plugin is now on Adobe, Sony Vegas, and DaVinci Resolve Studio.
                        </p>
                        <button className="cursor-pointer px-4 py-2 bg-white text-sm text-black font-semibold rounded-md">
                            View API Docs
                        </button>
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="grid md:grid-cols-3 gap-4 mt-20 text-white text-center text-">
                    <div className="border p-3 rounded-lg bg-black">
                        Detailed documentation for smooth integration
                    </div>
                    <div className="border p-3 rounded-lg bg-black">
                        Ultra-low latency model with response time under 500 ms
                    </div>
                    <div className="border p-3 rounded-lg bg-black">
                        Advanced text comprehension for smarter responses
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiFeatureCard;
