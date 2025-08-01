import { FaqCopy } from "@/data/data"
import Accordion from "../accordion"
import Button from "../button"

export default function Faq() {
    return (
        <div className="flex flex-col px-5 sm:px-20 xl:px-40 2xl:px-80 pb-30 items-center">
            {FaqCopy.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="font-semibold text-2xl sm:text-4xl 2xl:text-6xl text-blue-950 mb-8">{item.heading}</h2>
                        <p className="text-lg sm:text-xl 2xl:text-2xl text-neutral-500 xl:px-50 2xl:px-20 mb-15">{item.paragraph}</p>
                    </div>
                </div>
            ))}
            <Accordion />
            <Button
                paddingX="2xl:px-10 px-8"
                btnColor="bg-blue-600"
                btnLabel="More Info"
                btnBorder="border-blue-600"
                btnClasses="font-medium 2xl:text-2xl "
                btnBorderHover="hover:border-blue-600"
                textColorHover="hover:text-blue-600"

            />
        </div>
    )
}