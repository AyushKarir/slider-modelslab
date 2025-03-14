import CompanySlider from '@/components/companiesSlider/companiesSlider'
import PluginIntegration from '@/components/landing-constants/pluginIntergration'
import Hero from '@/components/landing-constants/hero'
import Navbar from '@/components/navbar/navbar'
import ImageModelSlider2 from '@/components/slider2'
import React from 'react'
import APIIntegrationCard from '@/components/landing-constants/apicard'
import Image from 'next/image'
import CopyrightMusic from '@/components/landing-constants/copyrightMusic'
import LanguagesGrid from '@/components/landing-constants/languages'
import DiscoverSound from '@/components/landing-constants/discoverSound'
import PricingPlans from '@/components/plans/plans'

const page = () => {

    const slider1Data = {
        title: "Everything You Need for AI Audio Creation",
        cards: [
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
                generationTime: "with",
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
            }
        ]
    };

    const slider2Data = {
        title: "Sound for every type of content. Across all platforms.",

        cards: [
            {
                id: 1,
                name: "Flux",
                logo: "/Flux.png",
                generationTime: "30sec",
                image: "/img.png",
                tags: ["text-to-image", "controlnet", "face-generation"],
                descHead: "kjnsdk",
                // descSub: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                track: "Sound / ARTIST",
                creator: "Ayush"
            },
            {
                id: 2,
                name: "Flux Realtime",
                generationTime: "5sec",
                logo: "/Flux.png",
                image: "/img.png",
                tags: ["text-to-image", "image-to-image"],
                descHead: "kjnsdk",
                // descSub: "Convert text into speech using our text to voice generator API.",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                track: "SOUND / ARTIST",
                creator: "Ayush"
            },
            {
                id: 3,
                name: "Stable Diffusion",
                generationTime: "with",
                logo: "/Flux.png",
                image: "/img.png",
                tags: ["text-to-image", "controlnet", "face-generation"],
                descHead: "kjnsdk",
                // descSub: "Convert text into speech using our text to voice generator API.",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                track: "Sound / ARTIST",
                creator: "Ayush"
            },
            {
                id: 4,
                name: "Stable Diffusion",
                logo: "/Flux.png",
                generationTime: "with loras",
                image: "/img.png",
                tags: ["text-to-image", "face-generation"],
                descHead: "kjnsdk",
                // descSub: "Convert text into speech using our text to voice generator API.",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                track: "Sound / ARTIST",
                creator: "Ayush"
            }
        ]
    };
    const slider3Data = {
        title: "Sound for every type of content. Across all platforms.",
        titleColor: "white",
        buttonColor: "white",
        spotify: "/constants/spotify.svg",
        youtube: "/constants/youtube.svg",
        cards: [
            {
                id: 1,
                name: "Flux",
                cardColor: "bg-white",
                logo: "/Flux.png",
                generationTime: "30sec",
                image: "/img.png",
                tags: ["text-to-image", "controlnet", "face-generation"],
                descHead: "kjnsdk",
                // descSub: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                // track: "Sound / ARTIST",
                ytStreams: "14 Billion Views",
                spotifyStreams: "140 Million Streams",

                // creator: "Ayush"
            },
            {
                id: 2,
                name: "Flux Realtime",
                generationTime: "5sec",
                cardColor: "bg-[#F9E813]",
                logo: "/Flux.png",
                image: "/img.png",
                tags: ["text-to-image", "image-to-image"],
                descHead: "kjnsdk",
                // descSub: "Convert text into speech using our text to voice generator API.",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                // track: "SOUND / ARTIST",
                // creator: "Ayush"
                ytStreams: "14 Billion Views",
                spotifyStreams: "140 Million Streams",
            },
            {
                id: 3,
                name: "Stable Diffusion",
                generationTime: "with",
                cardColor: "bg-[#E65AFF]",
                logo: "/Flux.png",
                image: "/img.png",
                tags: ["text-to-image", "controlnet", "face-generation"],
                descHead: "kjnsdk",
                // descSub: "Convert text into speech using our text to voice generator API.",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                // track: "Sound / ARTIST",
                // creator: "Ayush"
                ytStreams: "14 Billion Views",
                spotifyStreams: "140 Million Streams",
            },
            {
                id: 4,
                name: "Stable Diffusion",
                logo: "/Flux.png",
                generationTime: "with loras",
                cardColor: "bg-[#A0616A]",
                image: "/img.png",
                tags: ["text-to-image", "face-generation"],
                descHead: "kjnsdk",
                // descSub: "Convert text into speech using our text to voice generator API.",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                // track: "Sound / ARTIST",
                // creator: "Ayush"
                ytStreams: "14 Billion Views",
                spotifyStreams: "140 Million Streams",
            },
            {
                id: 5,
                name: "Flux Realtime",
                generationTime: "5sec",
                cardColor: "bg-white",
                logo: "/Flux.png",
                image: "/img.png",
                tags: ["text-to-image", "image-to-image"],
                descHead: "kjnsdk",
                // descSub: "Convert text into speech using our text to voice generator API.",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                // track: "SOUND / ARTIST",
                // creator: "Ayush"
                ytStreams: "14 Billion Views",
                spotifyStreams: "140 Million Streams",
            },
            {
                id: 6,
                name: "Flux Realtime",
                generationTime: "5sec",
                cardColor: "bg-white",
                logo: "/Flux.png",
                image: "/img.png",
                tags: ["text-to-image", "image-to-image"],
                descHead: "kjnsdk",
                // descSub: "Convert text into speech using our text to voice generator API.",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                // track: "SOUND / ARTIST",
                // creator: "Ayush"
                ytStreams: "14 Billion Views",
                spotifyStreams: "140 Million Streams",
            },
            {
                id: 7,
                name: "Flux Realtime",
                generationTime: "5sec",
                cardColor: "bg-white",
                logo: "/Flux.png",
                image: "/img.png",
                tags: ["text-to-image", "image-to-image"],
                descHead: "kjnsdk",
                // descSub: "Convert text into speech using our text to voice generator API.",
                // hoverInfo: "Modelslab provides daily digital solutions, including AI tools, to help businesses innovate, streamline processes, and generate new opportunities.",
                // track: "SOUND / ARTIST",
                // creator: "Ayush"
                ytStreams: "14 Billion Views",
                spotifyStreams: "140 Million Streams",
            }
        ]
    };

    const pricingData = [
        {
            id: 'basic',
            title: 'Basic Plan',
            description: 'Moderate traffic, growing needs.',
            monthlyPrice: 12,
            features: [
                '600 Minutes to experience all features',
                '100% refund policy',
                '5 parallel generations',
                'API access',
                '600 mins of high quality',
                'text to speech',
                'voice to voice',
                'voice cover',
                '256kbps 32kHz quality',
                'Commercial Use License'
            ],
            primaryButton: {
                text: 'Subscribe',
                type: 'primary'
            },
            isPopular: false,
            isFast: false,
            isEverything: false
        },
        {
            id: 'standard',
            title: 'Standard Plan',
            description: 'High traffic, medium scale.',
            monthlyPrice: 47,
            features: [
                '3000 Minutes to experience all features',
                '100% refund policy',
                '5 parallel generations',
                'API access',
                '3000 mins of high quality',
                'text to speech',
                'voice to voice',
                'voice cover',
                '256kbps 32kHz quality',
                'Commercial Use License'
            ],
            primaryButton: {
                text: 'Subscribe',
                type: 'primary'
            },
            isPopular: true,
            isFast: false,
            isEverything: false
        },
        {
            id: 'unlimited',
            title: 'Unlimited AI Suite',
            description: 'Heavy traffic, enterprise-grade.',
            monthlyPrice: 199,
            originalMonthlyPrice: 300,
            features: [
                'Unlimited API Credits to experience all features',
                '5 parallel generations',
                'Unlimited Imagen',
                'Unlimited AudioGen',
                'Unlimited VideoFusion',
                'Unlimited 3Dverse',
                'Unlimited LLMaster',
                'Unlimited AutoAI',
                'Shared GPU'
            ],
            primaryButton: {
                text: 'Subscribe',
                type: 'primary'
            },
            isPopular: false,
            isFast: false,
            isEverything: true
        },
        {
            id: 'enterprise',
            title: 'Enterprise Plan',
            description: 'For extreme traffic conditions',
            monthlyPrice: 499,
            features: [
                'Unlimited API Credits to experience all features',
                'Queue-based generation',
                'No Rate Limiter',
                'RTX 4090 or higher',
                'Best for Testing',
                'Generation time 2 sec',
                '99% uptime Guarantee',
                'Load up to 100 Models'
            ],
            primaryButton: {
                text: 'Check Pricing',
                type: 'secondary'
            },
            secondaryButton: {
                text: 'Schedule a Call',
                type: 'tertiary'
            },
            isPopular: false,
            isFast: true,
            isEverything: false
        }
    ];


    return (
        <div className='w-full'>
            <div className=" border-b border-[#cdcdcd]">
                <div className=" max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                    <Navbar />
                </div>
            </div>
            <div className='relative bg-cover bg-center w-full' style={{ backgroundImage: "url('/Group.svg')" }}>
                <div className='max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8'>
                    <Hero />
                </div>
            </div>

            <div className='py-16'>
                <ImageModelSlider2 data={slider1Data} />
            </div>

            <div className='max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8'>
                <CompanySlider />
            </div>

            <div className='py-30'>
                <ImageModelSlider2 data={slider2Data} />
            </div>

            <div className=''>
                <PluginIntegration />
            </div>

            <div className='p-28'>
                <APIIntegrationCard />
            </div>


            <div className='relative py-30 bg-[#121919]'>
                <div className="absolute inset-0">
                    <Image
                        src="/constants/slider3bg.svg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />
                </div>
                <div className="relative z-10">
                    <ImageModelSlider2 data={slider3Data} />
                </div>
            </div>

            <div className='pt-20 bg-[#F9E813]' >
                <CopyrightMusic />
            </div>

            <div className='py-30' >
                <LanguagesGrid />
            </div>

            <div className='' >
                <DiscoverSound />
            </div>

            <div className='py-30' >
                <PricingPlans pricingData={pricingData} />
            </div>



        </div>
    )
}

export default page