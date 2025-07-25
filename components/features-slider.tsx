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
            <ul className="px-5 lg:px-40 flex flex-col justify-center list-none mb-20 2xl:mb-30">
                {FeaturesMenu.map((menuItem, index) => (
                    <li key={index} className={`flex-1 first:border-t-1 text-center text-lg text-neutral-500 font-medium border-b-1 border-neutral-300
                                                ${activeMenuItem === menuItem ? 'sm:border-b-4 sm:border-red-400' : ''}`}>
                        <button onClick={() => setActiveMenuItem(menuItem)}
                            className={`cursor-pointer py-4 w-52
                            ${activeMenuItem === menuItem ? 'border-b-4 border-red-400 sm:border-b-0 sm:border-none' : ''}`}>
                            {menuItem}
                        </button>
                    </li>
                ))}
            </ul>
            <div>
                {FeaturesCard.map((cardItem, index) => (
                    <div key={index} className="flex flex-col sm:flex-row lg:flex-row">
                        {activeMenuItem === cardItem.menuItem ?
                            <>
                                <div className={`flex ${activeMenuItem === 'Simple Bookmarking' ? 'justify-start' : 'justify-center'} flex-1 overflow-visible relative xl:mr-50 sm:mb-0 mb-80`}>
                                    <Image
                                        key={cardItem.menuItem}
                                        src={cardItem.img}
                                        alt={cardItem.title}
                                        width={imageWidth}
                                        height={imageHeight}
                                        className={`absolute ${activeMenuItem === 'Simple Bookmarking' ? 'scale-90' : '-bottom-70 scale-80'}
                                              2xl:scale-110 z-10`}
                                    />
                                    <div
                                        className="absolute z-5 w-300 bg-blue-600 rounded-r-full
                                        -bottom-68 xl:-bottom-25 
                                        -left-220 
                                        h-55 xl:h-75 " />
                                </div>
                                <div className="flex-1 flex-col scale-lg:px-20 text-center items-center justify-center pr-0 mt-15">
                                    <h2 className="font-semibold text-2xl sm:text-4xl text-blue-950 mb-8">{cardItem.title}</h2>
                                    <p className="text-lg sm:text-xl text-neutral-500 mb-8">{cardItem.paragraph}</p>
                                    <div className="hidden lg:flex">
                                        <Button
                                            btnColor="bg-blue-600"
                                            btnLabel="More Info"
                                            btnBorder="border-blue-600"
                                            btnClasses="font-medium"
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