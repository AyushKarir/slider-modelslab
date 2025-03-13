'use client';

import Image from 'next/image';
import Link from 'next/link';

const PluginIntegration = () => {
    return (
        <section className="bg-[#00B6D1] pt-16 text-center relative">
            <div className="max-w-4xl mx-auto">
                {/* Icons Row */}
                <div className="flex justify-center gap-4 mb-4">
                    <Image src="/constants/premiere.svg" alt="Premiere Pro" width={40} height={40} />
                    <Image src="/constants/after.svg" alt="After Effects" width={40} height={40} />
                    <Image src="/constants/vegaspro.svg" alt="Sony Vegas" width={40} height={40} />
                    <Image src="/constants/davinci.svg" alt="DaVinci Resolve" width={40} height={40} />
                </div>

                {/* Heading & Subheading */}
                <h2 className="text-3xl md:text-4xl font-bold text-black">One-Click Plugin Integration</h2>
                <p className="text-lg text-black/80 mt-2">
                    The ModelsLab plugin is now on Adobe, Sony Vegas, and DaVinci Resolve Studio
                </p>

                {/* Button */}
                <Link
                    href="/download-plugins"
                    className="mt-4 inline-block bg-white text-black font-medium py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
                >
                    Download Plugins
                </Link>
            </div>

            {/* Image & Guitar Illustration */}
            <div className="relative flex justify-center mt-8 max-w-full mx-auto">
                <Image src="/constants/code.svg" alt="Plugin UI" width={900} height={500} className="2xl:w-[1272px] w-[972px] z-10 rounded-md" />
                <Image
                    src="/constants/guitar.svg"
                    alt="Guitar"
                    width={150}
                    height={150}
                    className="z-1 w-100 absolute right-0 bottom-0 hidden md:block"
                />
            </div>
        </section>
    );
};

export default PluginIntegration;
