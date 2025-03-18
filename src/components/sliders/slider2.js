"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import "swiper/css";

const ImageModelSlider2 = ({ data }) => {
    const [slidesOffset, setSlidesOffset] = useState(0);
    const [slidesOffset2, setSlidesOffset2] = useState(16);
    const [hoveredModel, setHoveredModel] = useState(null);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    useEffect(() => {
        const updateOffset = () => {
            setSlidesOffset(window.innerWidth > 640 ? 850 : 0);
        };
        updateOffset();
        window.addEventListener("resize", updateOffset);
        return () => window.removeEventListener("resize", updateOffset);
    }, []);

    useEffect(() => {
        const updateOffset = () => {
            const container = document.querySelector(".max-w-7xl");
            if (container) {
                setSlidesOffset2(container.getBoundingClientRect().left);
            }
        };
        updateOffset();
        window.addEventListener("resize", updateOffset);
        return () => window.removeEventListener("resize", updateOffset);
    }, []);

    return (
        <div className="w-full text-white px-3 md:px-0 py-6 rounded-3xl">
            <div className="max-w-full mx-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex p-4 flex-row justify-between items-center mb-8">
                        <h1 className={`text-2xl md:text-4xl ${data?.titleColor ? "text-white" : "text-black"} max-w-2xl font-bold museoText `}>
                            {data?.title || "Default Title"}
                        </h1>
                        <div className={`${data?.buttonColor ? "bg-white border-none" : ""} flex ml-3 p-1 rounded border-2 border-[#cdcdcd] `}>
                            <button ref={navigationPrevRef} className="p-1 cursor-pointer" aria-label="Previous models">
                                <ArrowLeft className={` ${data?.buttonColor ? "text-black" : ""} text-black w-6 h-6 `} />
                            </button>
                            <button ref={navigationNextRef} className="p-1 cursor-pointer" aria-label="Next models">
                                <ArrowRight className={` ${data?.buttonColor ? "text-black" : ""} text-black w-6 h-6 `} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pl-4 sm:pl-6 lg:pl-8 xl:mx-auto">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesOffsetBefore={slidesOffset2}
                        loop={false}
                        slidesPerView="auto"
                        className="flex justify-end"
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        onReachEnd={(swiper) => {
                            setTimeout(() => {
                                swiper.slideTo(0);
                            }, 1000);
                        }}
                    >
                        {data?.cards?.map((model) => (
                            <SwiperSlide key={model.id} className="!w-[350px]">
                                <div className={` rounded-2xl w-84 ${model?.cardColor ? model.cardColor : ""} -mr-4 `}>
                                    <div
                                        className="h-64 w-84 !rounded-2xl relative transition-all duration-300"

                                        onMouseEnter={() => setHoveredModel(model.id)}
                                        onMouseLeave={() => setHoveredModel(null)}
                                    >

                                        <div className="absolute inset-0 rounded-2xl">
                                            <Image src={model.image} alt={model.name} fill className="object-cover rounded-2xl" />
                                        </div>

                                        {/* Play button (hidden on hover) */}
                                        {hoveredModel !== model.id && (
                                            <div className="absolute top-2 right-2 items-center flex p-2 bg-amber-300 rounded-md">
                                                <Play />
                                            </div>
                                        )}

                                        {/* Play button + text (visible on hover) */}
                                        {hoveredModel === model.id && (
                                            <div className="absolute top-2 right-2 flex items-stretch rounded-md overflow-hidden">
                                                <div className="bg-orange-500 px-3 py-2 flex items-center justify-center">
                                                    <Play className="w-4 h-4 text-white" />
                                                </div>
                                                <div className="bg-gray-700/80 px-3 py-2 flex flex-col justify-center text-white">
                                                    <p className="text-xs uppercase leading-none font-medium">SOUND</p>
                                                    <p className="text-sm uppercase font-bold">ARTIST</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Hover description */}
                                        {hoveredModel && model.hoverInfo === model.id && (
                                            <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-3 rounded">
                                                <p className="text-center text-xs font-semibold museoText leading-[1.8]">{model.hoverInfo}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col w-84 rounded-2xl px-4 py-2">
                                        <p className="text-black text-2xl museoText font-semibold py-1 mt-2">{model.descHead}</p>
                                        {model?.descSub && <p className="text-black/70 font-medium text py-1 leading-[1.2]">{model.descSub}</p>}
                                        {model?.track && <p className="text-black/70 font-medium text py-1 leading-[1.2]">Track : <span className="text-black">{model.track} </span> </p>}
                                        {model?.creator && <p className="text-black/70 font-medium text py-1 leading-[1.2]">Creator : <span className="text-black">{model.creator} </span> </p>}
                                        {data?.youtube && (
                                            <>
                                                <div className="flex gap-2">
                                                    <Image src="constants/youtube.svg" width={50} height={50} className="w-5" />
                                                    <p className="text text-black">{model.ytStreams}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Image src="constants/spotify.svg" width={50} height={50} className="w-5" />
                                                    <p className="text text-black">{model.spotifyStreams}</p>
                                                </div>
                                            </>
                                        )
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <SwiperSlide>
                            <div className="-ml-[350px] w-64 h-64"></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div >
        </div >
    );
};

export default ImageModelSlider2;
