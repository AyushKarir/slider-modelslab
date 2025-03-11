import { ChevronDown, Moon, Rocket } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
    return (
        <nav className=" ">
            <div className="flex justify-between items-center h-16">
                {/* Left Side - Logo */}
                <p className="font-bold text-2xl">Models<span className="text-[#005CF0]">Lab</span> </p>

                {/* Middle - Buttons */}
                <div className="flex space-x-4">
                    <button className="font-medium  cursor-pointer px-4 py-2">Home</button>
                    <button className="font-medium  cursor-pointer px-4 py-2">About</button>
                    <button className="font-medium  cursor-pointer px-4 py-2 flex items-center gap-1">
                        Services <ChevronDown size={16} />
                    </button>
                    <button className="cursor-pointer font-medium px-4 py-2 flex items-center gap-1">
                        Products <ChevronDown size={16} />
                    </button>
                    <button className="font-medium cursor-pointer px-4 py-2">Contact</button>
                </div>

                {/* Right Side - Buttons with Icons */}
                <div className="flex space-x-2">
                    <button className="font-medium cursor-pointer px-2 py-2 flex items-center">
                        <Moon size={20} />
                    </button>
                    <button className="font-medium cursor-pointer px-4 py-2 border-[1px] border-[#d8d8d8] rounded">Login</button>
                    <button className="font-medium flex gap-2 cursor-pointer px-5 py-2 flex items-center rounded text-white bg-[#005CF0]">
                        Launch App <Rocket size={20} />
                    </button>

                </div>
            </div>
        </nav>
    );
}
