import { FaqCopy } from "@/data/data"
import Accordion from "../accordion"
import Button from "../button"

export default function Faq() {
    return (
        <div className="flex flex-col px-5 sm:px-20 xl:px-40 2xl:px-80 pb-30 items-center">
            {FaqCopy.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="font-semibold text-2xl sm:text-4xl text-blue-950 mb-8">{item.heading}</h2>
                        <p className="text-lg sm:text-xl text-neutral-500 xl:px-50 2xl:px-70 mb-15">{item.paragraph}</p>
                    </div>
                </div>
            ))}
            <Accordion />
            <Button
                btnColor="bg-blue-600"
                btnBorder="border-blue-600"
                btnLabel="More Info"
                btnClasses="font-medium"
                btnBorderHover="hover:border-blue-600"
                textColorHover="hover:text-blue-600"

            />
        </div>
    )
}