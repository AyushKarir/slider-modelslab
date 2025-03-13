"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const PricingCard = ({
    title,
    description,
    price,
    originalPrice,
    discount,
    unit,
    features,
    primaryButton,
    secondaryButton,
    isPopular,
    isFast,
    isEverything
}) => {
    return (
        <div className="flex flex-col h-full ">

            {/* {(isPopular || isFast || isEverything) && ( */}

            <div className={` border rounded-[20px] flex flex-col h-full ${isPopular ? ' border-blue-500' : isFast ? ' border-indigo-600' : isEverything ? 'border-blue-500' : ' border'}`}>
                {(isPopular || isFast || isEverything) && (
                    <div className={`rounded-t-[20px] text-center text-white py-1 text-sm ${isPopular ? 'bg-blue-500 border-blue-500' : isFast ? 'bg-indigo-600 border-indigo-600' : 'bg-blue-500 border-blue-500'}`}>
                        {isPopular ? 'Popular' : isFast ? 'Lightning fast' : 'Include Everything'}
                    </div>
                )}
                <div className='p-5'>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{description}</p>

                    <div className="flex items-baseline mb-1">
                        <span className="text-2xl font-bold">${price}</span>
                        <span className="text-gray-500 text-sm">/{unit}</span>
                    </div>

                    {originalPrice && (
                        <div className="flex items-center mb-4">
                            <span className="text-sm text-gray-500 line-through mr-2">${originalPrice}</span>
                            <span className="text-xs bg-blue-100 text-blue-700 rounded px-1">Save {discount}%</span>
                        </div>
                    )}

                    <div className="flex items-center text-xs text-blue-500 mb-1">
                        <Image src="/constants/plans/discount.svg" alt="Cheaper" width={16} height={16} />
                        <span className="ml-1">{discount}% cheaper</span>
                    </div>

                    <div className="flex items-center text-xs text-blue-500 mb-5">
                        <Image src="/constants/plans/flash.svg" alt="Faster" width={16} height={16} />
                        <span className="ml-1">{title === 'Enterprise Plan' ? '500x' : title === 'Unlimited AI Suite' ? '10x' : '10%'} faster</span>
                    </div>

                    <div className="flex-grow">
                        {primaryButton && (
                            <button className={`cursor-pointer w-full py-2 px-4 rounded text-sm font-medium mb-4 ${primaryButton.type === 'primary' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-800'}`}>
                                {primaryButton.text}
                            </button>
                        )}

                        {secondaryButton && (
                            <button className="cursor-pointer w-full py-2 px-4 rounded text-sm font-medium mb-4 flex items-center justify-center bg-blue-600 text-white">
                                <Image src="/constants/plans/24-support.svg" alt="Call" width={16} height={16} className="mr-2" />
                                {secondaryButton.text}
                            </button>
                        )}
                    </div>

                    <div className="space-y-2 mt-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Image src="/constants/plans/tick.svg" alt="Check" width={16} height={16} />
                                </div>
                                <span className="ml-2 text-sm font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    );
};

const PricingSection = ({ pricingData }) => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const discount = 20;

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-3 museoText">Get Started with ModelsLab</h2>
            <p className="text-center text-gray-600 mb-24">Choose plan as per your needs, cancel anytime.</p>

            <div className="flex items-center justify-between mb-8 space-x-4">
                <div className='flex items-center gap-2'>
                    <div className='flex border-1 rounded-md p-2 shadow-inner border-[#E5E7EB]'>
                        <button
                            className={`px-4 cursor-pointer py-1 rounded-md text-sm ${billingCycle === 'monthly' ? 'bg-blue-600 text-white' : ''}`}
                            onClick={() => setBillingCycle('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 cursor-pointer py-1 rounded-md text-sm ${billingCycle === 'yearly' ? 'bg-blue-600 text-white' : ''}`}
                            onClick={() => setBillingCycle('yearly')}
                        >
                            Yearly
                        </button>
                    </div>


                    <div className="text-xs bg-blue-100 text-blue-700 rounded px-2 py-1">
                        Save up to 20%
                    </div>
                </div>
                <button
                    href="/download-plugins"
                    className="flex gap-2 text-sm cursor-pointer bg-[#005CF0] text-white font-medium py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition"
                >
                    <Image src="/constants/plans/phone.svg" alt="Faster" width={16} height={16} />
                    Contact Sales
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingData.map((plan) => (
                    <PricingCard
                        key={plan.id}
                        title={plan.title}
                        description={plan.description}
                        price={billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.monthlyPrice * 12 * (1 - discount / 100))}
                        originalPrice={billingCycle === 'yearly' ? Math.round(plan.monthlyPrice * 12) : null}
                        discount={discount}
                        unit={billingCycle === 'monthly' ? 'month' : 'year'}
                        features={plan.features}
                        primaryButton={plan.primaryButton}
                        secondaryButton={plan.secondaryButton}
                        isPopular={plan.isPopular}
                        isFast={plan.isFast}
                        isEverything={plan.isEverything}
                    />
                ))}
            </div>
        </div>
    );
};

export default PricingSection;