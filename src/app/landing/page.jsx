import CompanySlider from '@/components/companiesSlider/companiesSlider'
import PluginIntegration from '@/components/landing-constants/pluginIntergration'
import Hero from '@/components/landing-constants/hero'
import Navbar from '@/components/navbar/navbar'
import ImageModelSlider2 from '@/components/sliders/slider2'
import React from 'react'
import APIIntegrationCard from '@/components/landing-constants/apicard'
import Image from 'next/image'
import CopyrightMusic from '@/components/landing-constants/copyrightMusic'
import LanguagesGrid from '@/components/landing-constants/languages'
import DiscoverSound from '@/components/landing-constants/discoverSound'
import PricingPlans from '@/components/plans/plans'
import TestimonialSlider from '@/components/sliders/slider1'
import FAQSection from '@/components/Accordion/accordion'
import Slider3 from '@/components/sliders/slider3'

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
    const testimonialData = {
        title: "Join 1M+ users creating art using ModelsLab",
        subTitle: "Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools.",
        align: "center",
        cards: [
            {
                name: "John H.",
                occupation: "AI/Python Enthusiast",
                stars: 5, // 5 stars
                avatar: "/images/avatars/john-h.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
            },
            {
                name: "John K.",
                occupation: "Software Enthusiast",
                stars: 5, // 5 stars
                avatar: "/images/avatars/john-k.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
            },
            {
                name: "John H.",
                occupation: "UX/UI Specialist",
                stars: 5, // 5 stars
                avatar: "/images/avatars/john-h2.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
            },
            // Add more testimonials to see the slider in action
            {
                name: "Sarah L.",
                occupation: "Product Designer",
                stars: 4, // 4 stars
                avatar: "/images/avatars/sarah-l.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
            },
            {
                name: "Mike R.",
                occupation: "Full Stack Developer",
                stars: 5, // 5 stars
                avatar: "/images/avatars/mike-r.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
            }
        ]
    };
    const lastSliderData = {
        title: "Explore Our Other Solutions",
        subTitle: "ModelsLab offers complete creative business solutions to enterprises that want to advance, build apps, and scale up. Here are reasons why you’ll love us:",
        align: "left",
        cards: [
            {
                name: "John H.",
                occupation: "AI/Python Enthusiast",
                stars: 5, // 5 stars
                avatar: "/images/avatars/john-h.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
            },
            {
                name: "John K.",
                occupation: "Software Enthusiast",
                stars: 5, // 5 stars
                avatar: "/images/avatars/john-k.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
            },
            {
                name: "John H.",
                occupation: "UX/UI Specialist",
                stars: 5, // 5 stars
                avatar: "/images/avatars/john-h2.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
            },
            // Add more testimonials to see the slider in action
            {
                name: "Sarah L.",
                occupation: "Product Designer",
                stars: 4, // 4 stars
                avatar: "/images/avatars/sarah-l.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
            },
            {
                name: "Mike R.",
                occupation: "Full Stack Developer",
                stars: 5, // 5 stars
                avatar: "/images/avatars/mike-r.png",
                testiInfo: "  Explore Our AI Image Generator Tools for Creating Captivating AI Generated Art. Explore a world of infinite inspiration and take your artworks to new heights with our AI image generator tools."
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


    const faqData = [
        {
            question: "What is ModelsLab?",
            answer: "ModelsLab is an AI platform that provides tools for creating and deploying machine learning models without requiring extensive coding knowledge. Our platform is designed for researchers, data scientists, and businesses looking to leverage AI technology."
        },
        {
            question: "What is ModelsLab?",
            answer: "ModelsLab allows you to build custom AI models for image recognition, text analysis, prediction tasks, and more. Our platform provides pre-built templates and a user-friendly interface for model training and deployment."
        },
        {
            question: "What is ModelsLab?",
            answer: "ModelsLab is a comprehensive suite of AI tools and services that simplifies the machine learning workflow from data preparation to model deployment and monitoring."
        },
        {
            question: "What is ModelsLab?",
            answer: "ModelsLab is an end-to-end AI solution that helps businesses implement machine learning capabilities without requiring a specialized team of data scientists."
        },
        {
            question: "What is ModelsLab?",
            answer: "ModelsLab provides a collaborative environment for teams to work on AI projects together, sharing resources, models, and insights in a centralized workspace."
        },
        {
            question: "What is ModelsLab?",
            answer: "ModelsLab offers both ready-to-use AI models for common tasks and the ability to train custom models tailored to your specific business requirements."
        },
        {
            question: "What is ModelsLab?",
            answer: "ModelsLab is an AI platform that integrates with your existing workflows and tools, making it easier to incorporate machine learning capabilities into your products and services."
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

            <div className='p-10 md:p-28'>
                <APIIntegrationCard />
            </div>


            <div className='relative py-30 bg-[#121919] px-4'>
                <div className="absolute inset-0">
                    <Image
                        src="/constants/slider3bg.svg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />
                </div>
                <div className="relative z-10 px-4">
                    <ImageModelSlider2 data={slider3Data} />
                </div>
            </div>

            <div className='pt-20 px-4 bg-[#F9E813]' >
                <CopyrightMusic />
            </div>

            <div className='py-30 px-4' >
                <LanguagesGrid />
            </div>

            <div className='px-4' >
                <DiscoverSound />
            </div>

            <div className='py-16 px-4' >
                <PricingPlans pricingData={pricingData} />
            </div>

            <div className='py-16 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8'>
                <TestimonialSlider testimonials={testimonialData} />
            </div>

            <div className='py-16 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8'>
                <FAQSection
                    faqItems={faqData}
                    title="Still Have Questions?"
                    subtitle="We have answers"
                    emailAddress="support@modelslab.com"
                    bookMeetingLink="/book-meeting"
                    viewDocsLink="/documentation"
                />
            </div>

            <div className='py-16 max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8'>
                <Slider3 testimonials={lastSliderData} />
            </div>


        </div>
    )
}

export default page