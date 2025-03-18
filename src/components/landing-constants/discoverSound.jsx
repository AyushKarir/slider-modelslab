import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DiscoverSound = () => {
    return (
        <div>
            <div className="relative w-full max-w-6xl mx-auto rounded-[30px] bg-[#121919] overflow-hidden">
                <div className="absolute z-0 inset-0">
                    <Image
                        src="/constants/lines2.svg"
                        alt="Background"
                        layout="fill"

                        objectFit="cover"
                        className="z-0"
                    />
                </div>
                <div className='relative flex flex-col justify-center items-center pt-24 z-10'>
                    <div className="mx-auto p-4 rounded-lg text-center"> {/* Added text-center for centering text */}
                        <p className='text-4xl md:text-5xl py-2 font-bold museoText text-white max-w-md'>
                            Discover what sound can do.
                        </p>

                        <div className="flex justify-center items-center"> {/* Flex container for centering the button */}
                            <button
                                href="/download-plugins"
                                className="mb-56 cursor-pointer inline-block mt-12  bg-white text-black font-medium py-3 px-6 rounded-md shadow-md hover:bg-gray-100 transition"
                            >
                                Download Plugins
                            </button>
                            <Image src="/constants/music.svg"
                                alt="Background"
                                width={30}
                                height={30}
                                className="hidden md:inline z-0 absolute bottom-3 right-3 w-6 mx-4 my-3" />
                        </div>

                        {/* <p className='py-2 font-sm text-white'>Create music without copyright worries.</p> */}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DiscoverSound