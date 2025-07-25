'use client';
import { FaqAccordion } from "@/data/data";
import { useState } from "react";

export default function Accordion() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    return (
        <div className="w-full px-5 xl:px-50  mb-20">
            {FaqAccordion.map((item, index) => (
                <div key={index} className="border-t-1 last:border-b-1 py-6 2xl:py-12 border-neutral-400 ">
                    <div onClick={() => setActiveAccordion(index === activeAccordion ? null : index)} className="cursor-pointer flex flex-row items-center justify-between">
                        <p className="text-xl 2xl:text-3xl font-normal text-blue-950 hover:text-red-400">
                            {item.question}</p>
                        <div className="flex items-center justify-center">
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                                className={`w-5 h-5 2xl:w-10 2xl:h-10 text-blue-600 transition-all ease-in-out duration-300 ${activeAccordion === index ? 'text-red-400 rotate-180' : ''}`}
                            ><path strokeLinecap="round" strokeLinejoin="round" d="M1 1l8 8 8-8" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p className={`transition-all ease-in-out duration-300
                                        ${activeAccordion === index ? 'block' : 'hidden'}
                                        my-5 text-lg 2xl:text-3xl text-neutral-500
                        `}>
                            {item.answer}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}