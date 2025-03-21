import Image from 'next/image'
import React from 'react'

const CopyrightMusic = () => {
    return (
        <div className="relative w-full max-w-6xl md:mx-auto  bg-[#F9E813] overflow-hidden">
            <div className='flex flex-col justify-start md:justify-center md:items-center'>
                <p className='text-3xl md:text-5xl py-2 font-bold museoText text-black'>Upload & Create Copyright-Free Music</p>
                <p className='text-black py-2 font-sm'>Create music without copyright worries.</p>
            </div>
            <Image src="constants/voicegen.svg" width={50} height={50} className='mt-12 md:mt-24 w-[1120px]' />
        </div>
    )
}

export default CopyrightMusic