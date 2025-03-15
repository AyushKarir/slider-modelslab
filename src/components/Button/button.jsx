import React from 'react';
import Image from 'next/image';

const Button = ({
    text = "Launch App",
    image = "",
    bgcolor = "#0066FF",
    textcolor = "#FFFFFF",
    iconleft = false,
    radius = "normal",
    onClick,
    className = "",
    ...props
}) => {
    // Determine border radius based on the radius prop
    const borderRadiusClass = radius === "full" ? "rounded-full" : "rounded-lg";

    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center gap-2 py-4 px-6 ${borderRadiusClass} transition-all duration-300 hover:opacity-90 ${className}`}
            style={{ backgroundColor: bgcolor, color: textcolor }}
            {...props}
        >
            {/* Show image on the left if iconleft is true and image path exists */}
            {image && iconleft && (
                <span className="flex items-center justify-center">
                    <Image
                        src={image}
                        alt="Button icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </span>
            )}

            {/* Button text */}
            <span className="font-medium text-xl">{text}</span>

            {/* Show image on the right if iconleft is false and image path exists */}
            {image && !iconleft && (
                <span className="flex items-center justify-center">
                    <Image
                        src={image}
                        alt="Button icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </span>
            )}
        </button>
    );
};

export default Button;











// EXAMPLES:

// <LaunchButton
// text="Launch App"
// image="/images/rocket-icon.svg"
// bgcolor="#0066FF"
// textcolor="#FFFFFF"
// iconleft={false}
// radius="normal"
// onClick={() => alert('Button clicked!')}
// />

// {/* Button with left icon */}
// <LaunchButton
// text="Launch App"
// image="/images/rocket-icon.svg"
// iconleft={true}
// />

// {/* Button with rounded corners */}
// <LaunchButton
// text="Get Started"
// image="/images/arrow-icon.svg"
// radius="full"
// bgcolor="#22C55E"
// />

// {/* Button without an icon */}
// <LaunchButton
// text="Sign Up"
// bgcolor="#6366F1"
// />

// {/* Button with custom colors */}
// <LaunchButton
// text="Download"
// image="/images/download-icon.svg"
// bgcolor="#292524"
// textcolor="#F8FAFC"
// />