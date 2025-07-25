import { HeroCopy } from "@/data/data"
import Button from "../button"
import Image from "next/image"


export default function Hero() {
    return (
        <div className="px-5 sm:px-20 xl:px-40 2xl:px-80 pt-25 sm:pt-35">
            {HeroCopy.map((item, index) => (
                <div key={index} className="flex flex-col-reverse pb-40 items-center">
                    <div className="flex-1 flex-col sm:pr-20 text-center items-center justify-center">
                        <h1 className="font-bold text-3xl sm:text-5xl text-blue-950 mb-8">{item.heading}</h1>
                        <p className="text-lg text-neutral-500 mb-8">{item.paragraph}</p>
                        <div className="flex flex-row space-x-6">
                            <Button paddingX="px-4" btnClasses="font-medium" btnColor="bg-blue-600" btnBorder="border-blue-600" btnBorderHover="hover:border-blue-600" textColorHover="hover:text-blue-600" btnLabel={item.btnPrimary} />
                            <Button paddingX="px-4" btnClasses="font-medium" btnColor="bg-neutral-100" textColor="text-blue-950" btnBorder="border-neutral-100" btnBorderHover="hover:border-blue-950" btnLabel={item.btnSecondary} />
                        </div>
                    </div>
                    <div className="flex-1 overflow-visible relative mb-30 pb-50 w-100">
                        <Image
                            src={'/illustration-hero.svg'}
                            alt={'Hero-image'}
                            width={500}
                            height={300}
                            className="absolute scale-100  2xl:scale-110 z-10"
                        />
                        <div className="absolute z-5 w-300 bg-blue-600 rounded-l-full
                        -bottom-20 xl:-bottom-25 
                        -right-220 
                        h-55 xl:h-75 ">
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}