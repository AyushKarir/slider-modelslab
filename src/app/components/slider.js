// components/ImageModelSlider.jsx
"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';

const ImageModelSlider = () => {
    const modelsData = [
        {
            id: 1,
            name: "Flux",
            logo: "/Flux.png",
            generationTime: "30sec",
            image: "/img.png",
            tags: ["text-to-image", "controlnet", "face-generation"]
        },
        {
            id: 2,
            name: "Flux Realtime",
            generationTime: "5sec",
            logo: "/Flux.png",
            image: "/img.png",
            tags: ["text-to-image", "image-to-image"]
        },
        {
            id: 3,
            name: "Stable Diffusion",
            generationTime: "with ",
            logo: "/Flux.png",
            image: "/img.png",
            tags: ["text-to-image", "controlnet", "face-generation"]
        },
        {
            id: 4,
            name: "Stable Diffusion",
            logo: "/Flux.png",
            generationTime: "with loras",
            image: "/img.png",
            tags: ["text-to-image", "face-generation"]
        }
    ];

    const [slidesOffset, setSlidesOffset] = useState(0);

    useEffect(() => {
        // Function to update slidesOffsetBefore based on screen width
        const updateOffset = () => {
            setSlidesOffset(window.innerWidth > 640 ? 250 : 0);
        };

        updateOffset(); // Set initial value
        window.addEventListener('resize', updateOffset); // Update on resize

        return () => window.removeEventListener('resize', updateOffset); // Cleanup
    }, []);

    const [hoveredModel, setHoveredModel] = useState(null);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <div className="w-full text-white px-3 md:px-0 py-6 rounded-3xl">
            <div className="max-w-full mx-auto">
                <div className="flex p-4 flex-row justify-start items-center mb-8">
                    <h1 className="text-2xl md:text-3xl text-black font-bold">Generation Models</h1>
                    <div className="flex ml-3 p-1 rounded border-2 border-[#cdcdcd]">
                        <button ref={navigationPrevRef} className="p-1 cursor-pointer" aria-label="Previous models">
                            <ArrowLeft className="w-6 h-6 text-black" />
                        </button>
                        <button ref={navigationNextRef} className="p-1 cursor-pointer" aria-label="Next models">
                            <ArrowRight className="w-6 h-6 text-black" />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView={3.2}
                    slidesOffsetBefore={slidesOffset}
                    slidesOffsetAfter={slidesOffset}
                    loop={false}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1.2, spaceBetween: 10 },
                        640: { slidesPerView: 2.2, spaceBetween: 12 },
                        1024: { slidesPerView: 2.4, spaceBetween: 16 }
                    }}
                >
                    {modelsData.map((model) => (
                        <SwiperSlide key={model.id}>
                            <div
                                className={`h-64 rounded-xl relative overflow-hidden transition-all duration-300 ${hoveredModel === model.id ? 'bg-[#B5D1FF] text-[#005CF0]' : ''}`}
                                onMouseEnter={() => setHoveredModel(model.id)}
                                onMouseLeave={() => setHoveredModel(null)}
                            >

                                {model.image && hoveredModel !== model.id && (
                                    <div className="absolute inset-0 custom-gradient">
                                        <div className="absolute inset-0 custom-gradient"> </div>
                                        <Image src={model.image} alt={model.name} fill className="object-cover" />

                                    </div>
                                )}

                                <div className="p-6 relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold">{model.name}</h2>
                                        <p className="mt-1 text-xl md:text-2xl font-medium opacity-80">Generation time {model.generationTime}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {model.tags.map((tag, index) => (
                                                <div key={index} className="cursor-pointer px-3 py-1 bg-white text-black text-sm rounded-md">
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {hoveredModel === model.id && (
                                        <div className="flex gap-2 mt-4">
                                            <button className="px-4 py-2 cursor-pointer bg-[#005CF0] text-white rounded-md text-sm">Generate</button>
                                            <button className="px-4 py-2 cursor-pointer bg-transparent border-2 border-[#005CF0] text-[#005CF0] rounded-md text-sm">API Docs</button>
                                        </div>
                                    )}
                                    {model.logo && hoveredModel === model.id && (
                                        <div className="absolute bottom-4 right-4">
                                            <Image src={model.logo} alt="Logo" width={80} height={30} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
};

export default ImageModelSlider;