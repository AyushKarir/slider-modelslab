'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const TestimonialSlider = ({ testimonials }) => {
    const [progressWidth, setProgressWidth] = useState(0);

    // Render stars based on rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Image
                    key={i}
                    src={i < rating ? "/constants/stars/star.svg" : "/constants/spotify.svg"}
                    alt={i < rating ? "Filled star" : "Empty star"}
                    width={16}
                    height={16}
                    className="inline-block mr-1"
                />
            );
        }
        return stars;
    };

    return (
        <div className="w-full max-w-5xl mx-auto py-12 px-4">
            <h1 className="text-center text-3xl md:text-4xl font-bold mb-6 museoText">
                Join 100+ users creating art using ModelsLab
            </h1>

            <p className="text-center text-sm md:text-base text-gray-600 mb-12 max-w-2xl mx-auto">
                Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of
                infinite inspiration and take your artworks to new heights with our AI image generator tools.
            </p>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        centeredSlides: false,
                    },
                    768: {
                        slidesPerView: 3,
                        centeredSlides: false,
                    },
                }}
                onSlideChange={(swiper) => {
                    // Calculate progress based on current slide position
                    const progress = (swiper.realIndex) / (testimonials.length - 1);
                    setProgressWidth(progress * 100);
                }}
                onInit={(swiper) => {
                    // Set initial progress
                    setProgressWidth(0);
                }}
                className="mb-12"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card p-4 h-full">
                            <div className="flex items-center mb-3">
                                <Image
                                    src="/constants/avatar.svg"
                                    alt={testimonial.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-medium text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-gray-500">{testimonial.occupation}</p>
                                </div>
                                <div className="ml-auto">
                                    {renderStars(testimonial.stars)}
                                </div>
                            </div>
                            <p className="text-sm">
                                <span className="font-bold">"The LLM Chat API has dramatically helped me in how I approach chat integration. It's like giving an unlimited voice to my application, making it truly engaging."</span>
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

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

export default TestimonialSlider;