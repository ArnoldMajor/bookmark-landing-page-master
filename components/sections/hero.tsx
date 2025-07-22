import { HeroCopy } from "@/data/data"
import Button from "../button"
import Image from "next/image"


export default function Hero() {
    return (
        <section className="px-40 2xl:px-80">
            {HeroCopy.map((item, index) => (
                <div key={index} className="grid grid-cols-2 pt-30 pb-40 items-center">
                    <div className="flex flex-col pr-20">
                        <h1 className="font-bold text-5xl text-blue-950 mb-8">{item.heading}</h1>
                        <p className="text-lg text-neutral-500 mb-8">{item.paragraph}</p>
                        <div className="flex flex-row space-x-6">
                            <Button btnClasses="font-medium" btnColor="bg-blue-600" btnBorder="border-blue-600" btnBorderHover="hover:border-blue-600" textColorHover="hover:text-blue-600" btnLabel={item.btnPrimary} />
                            <Button btnClasses="font-medium" btnColor="bg-neutral-100" textColor="text-blue-950" btnBorder="border-neutral-100" btnBorderHover="hover:border-blue-950" btnLabel={item.btnSecondary} />
                        </div>
                    </div>
                    <div className=" flex justify-end overflow-visible">
                        <Image
                            src={item.image}
                            alt="Hero-image"
                            width={500}
                            height={300}
                            className="scale-130 z-200"
                        />
                        <div className="absolute z-100 bottom-70 h-75 w-140 right-0 bg-blue-600 rounded-l-full">
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}