import {getPageContent} from "@/lib/apiUtils";
import {useEffect, useState} from "react";

export default function FeatureCard({ title, image, description }) {

    return (
        <div className="relative h-[250px] xs:h-[300px] md:h-[350px] lg:h-[421px] rounded-[16px] xs:rounded-[20px] overflow-hidden group">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0B0706]/30" />
            <div className="absolute inset-0 p-4 xs:p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                <div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] leading-[150%] font-bold text-white mb-2 xs:mb-3 md:mb-4 font-roboto">
                        {title}
                    </h3>
                    <p className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base leading-[160%] font-roboto max-w-[445px]">
                        {description}
                    </p>
                </div>
                <button className="self-start flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 bg-white backdrop-blur-[40px] text-[#1D2130] font-medium text-xs xs:text-sm sm:text-base leading-[19px] rounded transition w-[100px] xs:w-[120px] sm:w-[146px] h-[36px] xs:h-[42px] sm:h-[51px] font-roboto">
                    Learn more
                </button>
            </div>
        </div>
    );
}
