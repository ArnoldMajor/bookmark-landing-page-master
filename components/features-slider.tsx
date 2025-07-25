'use client';
import { FeaturesMenu, FeaturesCard } from "@/data/data";
import { useState } from "react";
import Image from "next/image";
import Button from "./button";

export default function FeaturesSlider() {
    const [activeMenuItem, setActiveMenuItem] = useState('Simple Bookmarking');
    const isSimple = activeMenuItem === 'Simple Bookmarking';
    const imageWidth = isSimple ? 500 : 400;
    const imageHeight = isSimple ? 400 : 400;

    return (
        <div>
            <ul className="px-5 lg:px-40 flex flex-col lg:flex-row justify-center list-none mb-20 lg:mb-30 xl:mb-50 2xl:mb-60">
                {FeaturesMenu.map((menuItem, index) => (
                    <li key={index} className={`flex-1 first:border-t-1 lg:first:border-t-0 text-center text-lg 2xl:text-3xl text-neutral-500 font-medium border-b-1 border-neutral-300
                                                ${activeMenuItem === menuItem ? 'xl:border-b-4 xl:border-red-400' : ''}`}>
                        <button onClick={() => setActiveMenuItem(menuItem)}
                            className={`cursor-pointer py-4 w-52 lg:w-64 2xl:w-96 hover:text-red-400
                            ${activeMenuItem === menuItem ? 'border-b-4 border-red-400 xl:border-b-0 xl:border-none' : ''}`}>
                            {menuItem}
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                {FeaturesCard.map((cardItem, index) => (
                    <div key={index} className="flex flex-col lg:flex-row">
                        {activeMenuItem === cardItem.menuItem ?
                            <>
                                <div className={`flex flex-1 justify-center xl-${activeMenuItem === 'Simple Bookmarking' ? 'justify-start' : 'justify-center'} overflow-visible relative 
                                 mb-65`}>
                                    <Image
                                        key={cardItem.menuItem}
                                        src={cardItem.img}
                                        alt={cardItem.title}
                                        width={imageWidth}
                                        height={imageHeight}
                                        className={`absolute ${activeMenuItem === 'Simple Bookmarking'
                                            ? 'scale-90 sm:scale-80 lg:scale-110 xl:scale-100 sm:-bottom-65 lg:-bottom-50'
                                            : '-bottom-70 lg:-bottom-60 scale-80 lg:scale-100 xl:left-15 2xl:left-60'}
                                              2xl:scale-160 z-10`}
                                    />
                                    <div
                                        className="absolute z-5 w-300 bg-blue-600 rounded-r-full
                                        -bottom-68 xl:-bottom-75 2xl:-bottom-100
                                        -left-220 xl:-left-200 2xl:-left-135 
                                        h-55 xl:h-75 2xl:h-85 " />
                                </div>
                                <div className="flex-1 flex-col lg:pl-20 items-center justify-center
                                text-center lg:text-left pr-0 mt-15 lg:mt-0">
                                    <h2 className="font-semibold text-2xl sm:text-4xl lg:text-3xl 2xl:text-6xl text-blue-950 mb-8 2xl:mb-16">{cardItem.title}</h2>
                                    <p className="text-lg sm:text-xl 2xl:text-3xl text-neutral-500 mb-8 2xl:mb-16">{cardItem.paragraph}</p>
                                    <div className="hidden lg:flex">
                                        <Button
                                            paddingX="2xl:px-20"
                                            btnColor="bg-blue-600"
                                            btnLabel="More Info"
                                            btnBorder="border-blue-600"
                                            btnClasses="font-medium text-3xl"
                                            btnBorderHover="hover:border-blue-600"
                                            textColorHover="hover:text-blue-600"
                                        />
                                    </div>
                                </div>
                            </>
                            :
                            <></>
                        }
                    </div>
                ))}
            </div>
        </div>

    )
}