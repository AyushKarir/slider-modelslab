import Hero from '@/components/hero/hero'
import Navbar from '@/components/navbar/navbar'
import ImageModelSlider from '@/components/slider'
import React from 'react'

const page = () => {
    return (
        <div className='w-full'>
            <div className=" border-b border-[#cdcdcd]">
                <div className=" max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                    <Navbar />
                </div>
            </div>
            <div className='max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8'>
                <Hero />
            </div>

            {/* <div className='max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8'>
                <ImageModelSlider />
            </div> */}


        </div>
    )
}

export default page