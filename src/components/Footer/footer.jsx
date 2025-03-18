'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ footerData }) => {
    const { productLinks, resourceLinks, aboutLinks, socialLinks, legalLinks } = footerData;

    return (
        <footer className="w-full bg-white pt-16 pb-6 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top section with logo and newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-bold">
                            Models<span className="text-blue-500">Lab</span>
                        </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 items-center">
                        <div className="relative flex items-center">
                            <div className="absolute left-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                placeholder="Enter your email to get the latest news..."
                                className="py-2 pl-10 pr-4 border border-gray-300 rounded-md w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium w-full sm:w-auto">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 mb-8" />

                {/* Links section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Product links */}
                    <div>
                        <h3 className="font-bold text-md mb-4">Our Product</h3>
                        <ul className="space-y-3">
                            {productLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url} className="text-gray-800 hover:text-blue-600 text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources links */}
                    <div>
                        <h3 className="font-bold text-md mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {resourceLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url} className="text-gray-800 hover:text-blue-600 text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About links */}
                    <div>
                        <h3 className="font-bold text-md mb-4">About</h3>
                        <ul className="space-y-3">
                            {aboutLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.url} className="text-gray-800 hover:text-blue-600 text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Join Us */}
                    <div>
                        <h3 className="font-bold text-md mb-4">Join Us</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link key={index} href={social.url} aria-label={social.label}>
                                    <div className="w-6 h-6">
                                        <Image
                                            src={social.icon}
                                            alt={social.label}
                                            width={24}
                                            height={24}
                                            className="text-gray-800 hover:text-blue-600"
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom section with copyright and legal links */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-4 md:mb-0">
                        ModelsLab @ 2024. All rights reserved.
                    </p>

                    <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-4 flex items-center">
                            Made with
                            <Image
                                src="/constants/circle-logo.svg"
                                alt="circle logo"
                                width={16}
                                height={16}
                                className="mx-1"
                            />
                        </span>

                        <div className="flex space-x-6">
                            {legalLinks.map((link, index) => (
                                <Link key={index} href={link.url} className="text-sm text-gray-800 hover:text-blue-600">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;