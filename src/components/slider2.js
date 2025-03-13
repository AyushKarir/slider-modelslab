// // components/ImageModelSlider.jsx
// "use client";

// import { useState, useRef, useEffect } from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// // Import Swiper styles
// import 'swiper/css';

// const ImageModelSlider2 = () => {
// const modelsData = [
//     {
//         id: 1,
//         name: "Flux",
//         logo: "/Flux.png",
//         generationTime: "30sec",
//         image: "/img.png",
//         tags: ["text-to-image", "controlnet", "face-generation"],
//         descHead: "kjnsdk",
//         descSub: "Convert text into speech using our text to voice generator API.",
//         hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

//     },
//     {
//         id: 2,
//         name: "Flux Realtime",
//         generationTime: "5sec",
//         logo: "/Flux.png",
//         image: "/img.png",
//         tags: ["text-to-image", "image-to-image"],
//         descHead: "kjnsdk",
//         descSub: "Convert text into speech using our text to voice generator API.",
//         hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

//     },
//     {
//         id: 3,
//         name: "Stable Diffusion",
//         generationTime: "with ",
//         logo: "/Flux.png",
//         image: "/img.png",
//         tags: ["text-to-image", "controlnet", "face-generation"],
//         descHead: "kjnsdk",
//         descSub: "Convert text into speech using our text to voice generator API.",
//         hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

//     },
//     {
//         id: 4,
//         name: "Stable Diffusion",
//         logo: "/Flux.png",
//         generationTime: "with loras",
//         image: "/img.png",
//         tags: ["text-to-image", "face-generation"],
//         descHead: "kjnsdk",
//         descSub: "Convert text into speech using our text to voice generator API.",
//         hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

//     },
//     {
//         id: 5,
//         name: "Stable Diffusion",
//         logo: "/Flux.png",
//         generationTime: "with loras",
//         image: "/img.png",
//         tags: ["text-to-image", "face-generation"],
//         descHead: "kjnsdk",
//         descSub: "Convert text into speech using our text to voice generator API.",
//         hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."
//     },
//     {
//         id: 6,
//         name: "Stable Diffusion",
//         logo: "/Flux.png",
//         generationTime: "with loras",
//         image: "/img.png",
//         tags: ["text-to-image", "face-generation"],
//         descHead: "kjnsdk",
//         descSub: "kjnsdk",
//         hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

//     }
// ];

//     const [slidesOffset, setSlidesOffset] = useState(0);

//     useEffect(() => {
//         // Function to update slidesOffsetBefore based on screen width
//         const updateOffset = () => {
//             setSlidesOffset(window.innerWidth > 640 ? 850 : 0);
//         };

//         updateOffset(); // Set initial value
//         window.addEventListener('resize', updateOffset); // Update on resize

//         return () => window.removeEventListener('resize', updateOffset); // Cleanup
//     }, []);

//     const [hoveredModel, setHoveredModel] = useState(null);

//     const navigationPrevRef = useRef(null);
//     const navigationNextRef = useRef(null);

//     return (
// <div className="w-full text-white px-3 md:px-0 py-6 rounded-3xl">
//     <div className="max-w-full mx-auto">
//         <div className="flex p-4 flex-row justify-between items-center  mb-8">
//             <h1 className="text-2xl md:text-3xl text-black font-bold">Generation Models</h1>
//             <div className="flex ml-3 p-1 rounded border-2 border-[#cdcdcd]">
//                 <button ref={navigationPrevRef} className="p-1 cursor-pointer" aria-label="Previous models">
//                     <ArrowLeft className="w-6 h-6 text-black" />
//                 </button>
//                 <button ref={navigationNextRef} className="p-1 cursor-pointer" aria-label="Next models">
//                     <ArrowRight className="w-6 h-6 text-black" />
//                 </button>
//             </div>
//         </div>

//                 <Swiper
//                     modules={[Navigation]}
//                     spaceBetween={16}
//                     // slidesPerView={3.2}
//                     slidesPerView="auto"
//                     // slidesOffsetBefore={slidesOffset}
//                     // slidesOffsetAfter={slidesOffset}
//                     className='flex justify-end'
//                     loop={false}
//                     navigation={{
//                         prevEl: navigationPrevRef.current,
//                         nextEl: navigationNextRef.current,
//                     }}
//                     onBeforeInit={(swiper) => {
//                         swiper.params.navigation.prevEl = navigationPrevRef.current;
//                         swiper.params.navigation.nextEl = navigationNextRef.current;
//                     }}
//                     // breakpoints={{
//                     //     320: { slidesPerView: 1.2, spaceBetween: 10 },
//                     //     640: { slidesPerView: 3.2, spaceBetween: 12 },
//                     //     1024: { slidesPerView: 3.4, spaceBetween: 16, }
//                     // }}
//                     onReachEnd={(swiper) => {
//                         setTimeout(() => {
//                             swiper.slideTo(0); // Instantly reset to first slide when reaching the end
//                         }, 1000); // Delay to make it feel natural
//                     }}
//                 >
//                     {modelsData.map((model) => (
//                         <SwiperSlide key={model.id} className="!w-92 md:pl-32"> {/* Fixed width for each slide */}
//                             <div
//                                 className={`h-64 w-84 rounded-xl relative overflow-hidden transition-all duration-300 `}
//                                 onMouseEnter={() => setHoveredModel(model.id)}
//                                 onMouseLeave={() => setHoveredModel(null)}
//                             >

//                                 {model.image && hoveredModel !== model.id && (
//                                     <div className="absolute inset-0 custom-gradient">
//                                         <div className="absolute inset-0 custom-gradient"> </div>
//                                         <Image src={model.image} alt={model.name} fill className="object-cover" />

//                                     </div>
//                                 )}

//                                 <div className="p-6 relative z-10 h-full flex flex-col justify-between">
//                                     <div>
//                                         {/* <h2 className="text-3xl md:text-4xl font-bold">{model.name}</h2>
//                                         <p className="mt-1 text-xl md:text-xl font-medium opacity-80">Generation time {model.generationTime}</p> */}
//                                         <div className="flex flex-wrap gap-2 mt-4">
//                                             {/* {model.tags.map((tag, index) => (
//                                                 <div key={index} className="cursor-pointer px-3 py-1 bg-white text-black text-sm rounded-md">
//                                                     {tag}
//                                                 </div>
//                                             ))} */}
//                                         </div>
//                                     </div>
//                                     {hoveredModel === model.id && (
//                                         <div className="flex gap-2 mt-4">
//                                             <div className='bg-black opacity-70'> {model.descSub} </div>
//                                         </div>
//                                     )}
//                                     {/* {model.logo && hoveredModel === model.id && (
//                                         <div className="absolute bottom-4 right-4">
//                                             <Image src={model.logo} alt="Logo" width={80} height={30} />
//                                         </div>
//                                     )} */}
//                                 </div>

//                             </div>
//                             <p className='text-black font-medium text-lg mt-2'>{model.descHead}</p>
//                             <p className='text-black text-sm opacity-50'>{model.descSub}</p>
//                         </SwiperSlide>
//                     ))}
//                     <SwiperSlide>
//                         <div className="-ml-84 w-64  h-64"></div>
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </div >
//     );
// };

// export default ImageModelSlider2;







// components/ImageModelSlider.jsx
"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

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
            tags: ["text-to-image", "controlnet", "face-generation"],
            descHead: "kjnsdk",
            descSub: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities",
            hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

        },
        {
            id: 2,
            name: "Flux Realtime",
            generationTime: "5sec",
            logo: "/Flux.png",
            image: "/img.png",
            tags: ["text-to-image", "image-to-image"],
            descHead: "kjnsdk",
            descSub: "Convert text into speech using our text to voice generator API.",
            hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

        },
        {
            id: 3,
            name: "Stable Diffusion",
            generationTime: "with ",
            logo: "/Flux.png",
            image: "/img.png",
            tags: ["text-to-image", "controlnet", "face-generation"],
            descHead: "kjnsdk",
            descSub: "Convert text into speech using our text to voice generator API.",
            hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

        },
        {
            id: 4,
            name: "Stable Diffusion",
            logo: "/Flux.png",
            generationTime: "with loras",
            image: "/img.png",
            tags: ["text-to-image", "face-generation"],
            descHead: "kjnsdk",
            descSub: "Convert text into speech using our text to voice generator API.",
            hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

        },
        {
            id: 5,
            name: "Stable Diffusion",
            logo: "/Flux.png",
            generationTime: "with loras",
            image: "/img.png",
            tags: ["text-to-image", "face-generation"],
            descHead: "kjnsdk",
            descSub: "Convert text into speech using our text to voice generator API.",
            hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."
        },
        {
            id: 6,
            name: "Stable Diffusion",
            logo: "/Flux.png",
            generationTime: "with loras",
            image: "/img.png",
            tags: ["text-to-image", "face-generation"],
            descHead: "kjnsdk",
            descSub: "kjnsdk",
            hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities."

        }
    ];

    const [slidesOffset, setSlidesOffset] = useState(0);

    useEffect(() => {
        // Function to update slidesOffsetBefore based on screen width
        const updateOffset = () => {
            setSlidesOffset(window.innerWidth > 640 ? 850 : 0);
        };

        updateOffset(); // Set initial value
        window.addEventListener('resize', updateOffset); // Update on resize

        return () => window.removeEventListener('resize', updateOffset); // Cleanup
    }, []);



    const [slidesOffset2, setSlidesOffset2] = useState(16);

    useEffect(() => {
        const updateOffset = () => {
            const container = document.querySelector('.max-w-7xl');
            if (container) {
                setSlidesOffset2(container.getBoundingClientRect().left);
            }
        };

        updateOffset(); // Set initial offset
        window.addEventListener('resize', updateOffset);

        return () => {
            window.removeEventListener('resize', updateOffset);
        };
    }, []);



    const [hoveredModel, setHoveredModel] = useState(null);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);




    return (
        <div className="w-full text-white px-3 md:px-0 py-6 rounded-3xl">
            <div className="max-w-full mx-auto">
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex p-4 flex-row justify-between items-center  mb-8">
                        <h1 className="text-2xl md:text-4xl text-black font-bold museoText">Everything You Need for AI Audio Creation</h1>
                        <div className="flex ml-3 p-1 rounded border-2 border-[#cdcdcd]">
                            <button ref={navigationPrevRef} className="p-1 cursor-pointer" aria-label="Previous models">
                                <ArrowLeft className="w-6 h-6 text-black" />
                            </button>
                            <button ref={navigationNextRef} className="p-1 cursor-pointer" aria-label="Next models">
                                <ArrowRight className="w-6 h-6 text-black" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='xl:ml-32 xl:mx-auto'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        // slidesPerView={3.2}
                        slidesPerView="auto"
                        slidesOffsetBefore={slidesOffset2}
                        // slidesOffsetBefore={slidesOffset}
                        // slidesOffsetAfter={slidesOffset}
                        className='flex justify-end '
                        loop={false}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        // breakpoints={{
                        //     320: { slidesPerView: 1.2, spaceBetween: 10 },
                        //     640: { slidesPerView: 3.2, spaceBetween: 12 },
                        //     1024: { slidesPerView: 3.4, spaceBetween: 16, }
                        // }}
                        onReachEnd={(swiper) => {
                            setTimeout(() => {
                                swiper.slideTo(0); // Instantly reset to first slide when reaching the end
                            }, 1000); // Delay to make it feel natural
                        }}
                    >
                        {modelsData.map((model) => (
                            <SwiperSlide key={model.id} className={` !w-92 md:pl-32 `}>
                                <div
                                    className={`h-64 w-84 rounded-xl relative transition-all duration-300 
                                    }`}
                                    onMouseEnter={() => setHoveredModel(model.id)}
                                    onMouseLeave={() => setHoveredModel(null)}
                                >
                                    {/* Background Image (Always Visible) */}
                                    <div className="absolute inset-0">
                                        <Image src={model.image} alt={model.name} fill className="object-cover" />
                                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> */}
                                    </div>

                                    {/* Hover Content (Text Overlay with Semi-transparent Background) */}
                                    {/* Amber Play button (Visible when NOT hovered) */}
                                    {hoveredModel !== model.id && (
                                        <div className="absolute top-2 right-2 items-center flex p-2 bg-amber-300 rounded-md">
                                            <Play />
                                        </div>
                                    )}

                                    {/* Orange Play button + gray label (Visible when hovered) */}
                                    {hoveredModel === model.id && (
                                        <div className="absolute top-2 right-2 flex items-stretch rounded-md overflow-hidden">
                                            {/* Left - Orange Play Button */}
                                            <div className="bg-orange-500 px-3 py-2 flex items-center justify-center">
                                                <Play className="w-4 h-4 text-white" />
                                            </div>

                                            {/* Right - Gray Label */}
                                            <div className="bg-gray-700/80 px-3 py-2 flex flex-col justify-center text-white">
                                                <p className="text-xs uppercase leading-none font-medium">SOUND</p>
                                                <p className="text-sm uppercase font-bold">ARTIST</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Hover Info (Visible only on hover) */}
                                    {hoveredModel === model.id && (
                                        <div className="absolute bottom-4 left-4 right-4 bg-black/70 p-3 rounded">
                                            <p className="text-center text-xs font-semibold museoText leading-[1.8]">{model.hoverInfo}</p>
                                        </div>
                                    )}



                                    {/* Bottom content (Optional) */}
                                    <div className="p-6 absolute bottom-4 left-4 right-4 z-10">
                                    </div>

                                </div>
                                <div className='flex flex-col w-84'>
                                    <p className='text-black  text-2xl museoText font-semibold mt-2'>{model.descHead}</p>
                                    <p className='text-black/70 font-medium text-sm leading-[1.2]'>{model.descSub}</p>
                                </div>
                            </SwiperSlide>

                        ))
                        }
                        <SwiperSlide>
                            <div className="-ml-84 w-64  h-64"></div>
                        </SwiperSlide>
                    </Swiper >
                </div>
            </div >
        </div >
    );
};

export default ImageModelSlider;