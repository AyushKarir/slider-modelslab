'use client'
import { ChevronDown, Moon, Rocket, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "../Button/button";
import Button from "../Button/button";
// import ModelsLab from "../../../public/"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Side - Logo */}
                    {/* <p className="font-bold text-2xl">Models<span className="text-[#005CF0]">Lab</span></p> */}

                    <Image src="ModelsLab.svg" height={40} width={40} className="w-28" />

                    {/* Mobile Menu Button */}
                    <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Middle & Right Side - Desktop */}
                    <div className="hidden sm:flex space-x-4">
                        <button className="font-medium cursor-pointer px-4 py-2">Home</button>
                        <button className="font-medium cursor-pointer px-4 py-2">About</button>
                        <button className="font-medium poppinsText cursor-pointer px-4 py-2 flex items-center gap-1">
                            Services <ChevronDown size={16} />
                        </button>
                        <button className="cursor-pointer font-medium px-4 py-2 flex items-center gap-1">
                            Products <ChevronDown size={16} />
                        </button>
                        <button className="font-medium cursor-pointer px-4 py-2">Contact</button>
                    </div>

                    <div className="hidden sm:flex space-x-2">
                        <button className="font-medium cursor-pointer px-2 py-2 flex items-center">
                            <Image src="moon.svg" height={40} width={40} className="w-6" />
                        </button>
                        <button className="font-medium cursor-pointer px-4 py-2 border-[1px] border-[#d8d8d8] rounded-lg">Login</button>
                        {/* <Button bgcolor="white" text="Launch" textcolor="black" /> */}
                        <button className="font-medium flex gap-2 cursor-pointer px-5 py-2 flex items-center rounded-lg text-white bg-[#005CF0]">
                            Launch App <Image src="rocket.svg" height={40} width={40} className="w-4" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="sm:hidden absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col space-y-2 py-4">
                        <button className="font-medium cursor-pointer px-4 py-2">Home</button>
                        <button className="font-medium cursor-pointer px-4 py-2">About</button>
                        <div className="flex justify-center">
                            <button className="font-medium cursor-pointer px-4 py-2 flex items-center gap-1">
                                Services <ChevronDown size={16} />
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button className="cursor-pointer font-medium px-4 py-2 flex items-center gap-1">
                                Products <ChevronDown size={16} />
                            </button>
                        </div>
                        <button className="font-medium cursor-pointer px-4 py-2">Contact</button>
                        <div className="flex justify-center">
                            <button className="font-medium cursor-pointer px-2 py-2 flex items-center">
                                <Moon size={20} />
                            </button>
                        </div>
                        <button className="font-medium cursor-pointer px-4 py-2 border-[1px] border-[#d8d8d8] rounded-lg mx-4">Login</button>
                        <div className="flex justify-center px-4">
                            <button className="w-full justify-center font-medium flex gap-2 cursor-pointer px-5 py-2 items-center rounded-lg text-white bg-[#005CF0]">
                                Launch App
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}