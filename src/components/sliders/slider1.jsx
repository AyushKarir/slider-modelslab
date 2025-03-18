'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const TestimonialSlider = ({ testimonials }) => {
    const [progressWidth, setProgressWidth] = useState(0);

    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <Image
                key={i}
                src={i < rating ? "/constants/stars/star.svg" : "/constants/spotify.svg"}
                alt={i < rating ? "Filled star" : "Empty star"}
                width={16}
                height={16}
                className="inline-block mr-1"
            />
        ));
    };

    return (
        <div className="w-full max-w-5xl mx-auto py-12 px-4">
            <h1 className={`${testimonials.align === 'left' ? "text-left" : "text-center"} text-3xl md:text-4xl font-bold mb-6 museoText`}>
                {testimonials.title}
            </h1>

            {testimonials.subTitle && (
                <p className={`${testimonials.align === 'left' ? "text-left" : "text-center"} text-sm md:text-base text-gray-600 mb-12 max-w-2xl mx-auto`}>
                    {testimonials.subTitle}
                </p>
            )}

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
                    const progress = (swiper.realIndex) / (testimonials.cards.length - 1);
                    setProgressWidth(progress * 100);
                }}
                onInit={() => setProgressWidth(0)}
                className="mb-12"
            >
                {testimonials.cards.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card p-4 h-full border border-gray-200 rounded-lg shadow-md">
                            <div className="flex items-center mb-3">
                                <Image
                                    src="constants/avatar.svg"
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
                            <p className="text-sm">{testimonial.testiInfo}</p>
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
