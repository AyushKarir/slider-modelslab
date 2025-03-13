"use client";

import Image from "next/image";

const languages = [
    { name: "English", flag: "/flags/us.svg" },
    { name: "Hindi", flag: "/flags/in.svg" },
    { name: "Spanish", flag: "/flags/es.svg" },
    { name: "French", flag: "/flags/fr.svg" },
    { name: "German", flag: "/flags/de.svg" },
    { name: "Italian", flag: "/flags/it.svg" },
    { name: "Portuguese", flag: "/flags/pt.svg" },
    { name: "Polish", flag: "/flags/pl.svg" },
    { name: "Turkish", flag: "/flags/tr.svg" },
    { name: "Russian", flag: "/flags/ru.svg" },
    { name: "Dutch", flag: "/flags/nl.svg" },
    { name: "Czech", flag: "/flags/cz.svg" },
    { name: "Arabic", flag: "/flags/sa.svg" },
    { name: "Chinese", flag: "/flags/cn.svg" },
    { name: "Japanese", flag: "/flags/jp.svg" },
    { name: "Hungarian", flag: "/flags/hu.svg" },
    { name: "Korean", flag: "/flags/kr.svg" },
    { name: "Ukrainian", flag: "/flags/ua.svg" },
    { name: "Romanian", flag: "/flags/ro.svg" },
    { name: "Serbian", flag: "/flags/rs.svg" },
    { name: "Swedish", flag: "/flags/se.svg" },
    { name: "Thai", flag: "/flags/th.svg" },
    { name: "Welsh", flag: "/flags/gb.svg" },
    { name: "Afrikaans", flag: "/flags/za.svg" },
    { name: "Belarusian", flag: "/flags/by.svg" },
    { name: "Bulgarian", flag: "/flags/bg.svg" },
    { name: "Danish", flag: "/flags/dk.svg" },
    { name: "Finnish", flag: "/flags/fi.svg" },
    { name: "Greek", flag: "/flags/gr.svg" },
    { name: "Hebrew", flag: "/flags/il.svg" },
    { name: "Indonesian", flag: "/flags/id.svg" },
    { name: "Persian", flag: "/flags/ir.svg" },
    { name: "Nepali", flag: "/flags/np.svg" },
    { name: "Vietnamese", flag: "/flags/vn.svg" },
    { name: "Urdu", flag: "/flags/pk.svg" },
    { name: "Telugu", flag: "/flags/in.svg" },
    { name: "Tamil", flag: "/flags/in.svg" },
    { name: "Kannada", flag: "/flags/in.svg" },
    { name: "Malayalam", flag: "/flags/in.svg" },
    { name: "Punjabi", flag: "/flags/in.svg" },
    { name: "Gujarati", flag: "/flags/in.svg" },
    { name: "Marathi", flag: "/flags/in.svg" },
];

const LanguagesGrid = () => {
    return (
        <div className="w-full px-6 rounded-lg">
            <h2 className="text-center text-2xl md:text-4xl museoText font-bold mb-2">
                Worldwide Support: 43 Audio Languages Available
            </h2>
            <p className="text-center text-black/70 pt-3 mb-6">
                Expand Your Audience with Multilingual Dubbing Capabilities
            </p>

            <div className="pt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                {languages.map((lang) => (
                    <div
                        key={lang.name}
                        className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:shadow-md transition"
                    >
                        <Image src="/constants/flags/india.svg" alt={lang.name} width={24} height={16} />
                        <span className="text-sm font-medium">{lang.name}</span>
                    </div>
                ))}

                {/* Special Button for Bangla */}
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow border border-blue-500 hover:bg-blue-100 transition cursor-pointer">
                    <Image src="constants/flags/india.svg" alt="Bangla" width={24} height={16} />
                    <span className="text-sm font-medium text-blue-600">Bangla</span>
                    <span className="text-blue-600">↗</span>
                </div>
            </div>
        </div>
    );
};

export default LanguagesGrid;
