"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const CompanySlider = () => {
    const companies = [
        { name: "Google", image: "/logos/google.svg" },
        { name: "Salesforce", image: "/logos/salesforce.svg" },
        { name: "Amazon", image: "/logos/amazon.svg" },
        { name: "IBM", image: "/logos/ibm.svg" },
        { name: "Adobe", image: "/logos/adobe.svg" },
        { name: "Sony", image: "/logos/sony.svg" },
    ];

    return (
        <div className="w-full flex flex-col items-center py-8">
            <h2 className="text-center font-semibold text-2xl mb-12 museoText">Trusted by</h2>
            <Swiper
                slidesPerView="auto"
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={800} // Smooth transition
                modules={[Autoplay]}
                className="w-full max-w-5xl"
            >
                {companies.map((company, index) => (
                    <SwiperSlide key={index} className="!w-auto flex justify-center">
                        <img src={company.image} alt={company.name} className="h-8 object-contain" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CompanySlider;
