'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const FAQSection = ({
    title = "Still Have Questions?",
    subtitle = "We have answers",
    emailText = "Want to know more? You can email us anytime at",
    emailAddress = "support@modelslab.com",
    faqItems = [],
    bookMeetingLink = "#",
    viewDocsLink = "#"
}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col md:flex-row bg-gray-50 p-8 md:p-12 gap-8 md:gap-16">
            {/* Left Section */}
            <div className="md:w-1/3">
                <h2 className="text-3xl font-bold mb-2">{title}</h2>
                <p className="text-xl font-bold mb-6">{subtitle}</p>

                <p className="text-sm text-gray-600 mb-2">
                    {emailText}
                </p>
                <a href={`mailto:${emailAddress}`} className="text-sm text-blue-600 font-medium mb-8 block">
                    {emailAddress}
                </a>

                <div className="flex flex-wrap gap-3 mt-6">
                    <a
                        href={bookMeetingLink}
                        className="flex font-medium text-base items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-full"
                    >
                        <Image
                            src="/constants/plans/phone.svg"
                            alt="Phone"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span>Book a Meeting</span>
                    </a>

                    <a
                        href={viewDocsLink}
                        className="flex font-medium items-center gap-2 bg-black text-white py-2 px-4 rounded-full "
                    >
                        <Image
                            src="/constants/document.svg"
                            alt="Document"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span>View Docs</span>
                    </a>
                </div>
            </div>

            {/* Right Section - FAQ Accordion */}
            <div className="md:w-2/3 cursor-pointer">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className="border mb-4 px-4 rounded-md cursor-pointer border-gray-200 py-4"
                    >
                        <button
                            className="flex cursor-pointer justify-between items-center w-full text-left"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-medium">{item.question}</span>
                            <Image
                                src="/constants/plans/down.svg"
                                alt="Expand"
                                width={16}
                                height={16}
                                className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {openIndex === index && (
                            <div className="mt-2 text-gray-600">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;