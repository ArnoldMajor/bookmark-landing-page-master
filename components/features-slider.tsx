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
            <ul className="px-5 lg:px-40 flex flex-row justify-center list-none mb-20">
                {FeaturesMenu.map((menuItem, index) => (
                    <li key={index} className={`flex-1 text-center text-lg py-4 text-neutral-500 font-medium
                                                ${activeMenuItem === menuItem ? 'border-b-4 border-red-400' : 'border-b-1 border-neutral-300'}`}>
                        <button onClick={() => setActiveMenuItem(menuItem)} className="cursor-pointer">
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
                                <div className={`flex ${activeMenuItem === 'Simple Bookmarking' ? 'justify-start' : 'justify-center'} flex-1 overflow-visible relative xl:mr-70`}>
                                    <Image
                                        key={cardItem.menuItem}
                                        src={cardItem.img}
                                        alt={cardItem.title}
                                        width={imageWidth}
                                        height={imageHeight}
                                        className="absolute lg:scale-80 xl:scale-100 z-10"
                                    />
                                    <div className="absolute z-5 -bottom-25 h-65 xl:h-75 w-200 -left-100 bg-blue-600 rounded-r-full" />
                                </div>
                                <div className="flex-1 flex-col scale-lg:px-20 justify-center pr-0 mt-15">
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