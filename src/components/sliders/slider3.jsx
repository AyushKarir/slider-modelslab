'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Slider3 = ({ testimonials }) => {
    const [progressWidth, setProgressWidth] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    // Define solution types with labels
    const solutionTypes = [
        { name: "Imagen", subtitle: "AI Image Generation & Tools" },
        { name: "Video Fusion", subtitle: "AI Video Generation & Tools" },
        { name: "Uncensored Chat", subtitle: "Engage Seamlessly with LLM" },
        { name: "3D Verse", subtitle: "Create Stunning 3D Models" }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className='flex flex-col justify-start'>
                <h2 className={`${testimonials.align === 'left' ? "" : "text-center"} text-2xl md:text-3xl font-bold mb-2`}>
                    {testimonials.title}
                </h2>


                <p className={`${testimonials.align === 'left' ? "" : "text-center"} text text-gray-600 mb-8`}>
                    {testimonials.subTitle}
                </p>
            </div>


            <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    }
                }}
                onSlideChange={(swiper) => {
                    const progress = (swiper.realIndex) / (testimonials.cards.length - 1);
                    setProgressWidth(progress * 100);
                    setActiveTab(swiper.realIndex % 4);
                }}
                onInit={() => {
                    setProgressWidth(0);
                    setActiveTab(0);
                }}
                className="mb-8"
            >
                {testimonials.cards.map((card, index) => (
                    <SwiperSlide key={index} className='p-2'>
                        <div className="relative  h-full overflow-hidden rounded-lg shadow-sm">
                            {/* Card image */}
                            <div className="relative bg-gray-800">
                                <Image
                                    src="/constants/slider3.svg"
                                    alt={solutionTypes[index % 4].name}
                                    width={400}
                                    height={300}
                                    className="object-cover opacity-80"
                                />

                                {/* Play button for videos (only on video type) */}
                                {index % 4 === 1 && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white/25 flex items-center justify-center">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-teal-500 border-b-[6px] border-b-transparent ml-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Label in top left */}
                                <div className="absolute top-3 left-3 bg-white/90 text-xs font-bold px-2 py-1 rounded">
                                    gothic style Prompt by Miki
                                </div>

                                {/* Icon in bottom right (for certain cards) */}
                                {index % 4 === 0 && (
                                    <div className="absolute bottom-3 right-3 bg-blue-500 text-white text-xs font-bold p-1 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 15l-6-6-6 6" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* Card content */}
                            <div className="bg-white p-4">
                                <h3 className="font-bold text-lg mb-1">{solutionTypes[index % 4].name}</h3>
                                <p className="text-xs text-gray-500">{solutionTypes[index % 4].subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Tab indicators */}
            <div className="flex justify-center">
                <div className="h-1 bg-gray-200 w-48 rounded-full relative">
                    <div
                        className="h-1 bg-blue-500 rounded-full absolute top-0 left-0 transition-all duration-300"
                        style={{ width: `${progressWidth}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Slider3;