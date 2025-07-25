import { DownloadsCards, DownloadsCopy } from "@/data/data";
import Image from "next/image";
import Button from "../button";

export default function Downloads() {
    const cardMargin = ['sm:translate-y-0', 'sm:translate-y-10', 'sm:translate-y-20']
    return (
        <div className="px-5 sm:px-20 xl:px-40 2xl:px-80 pb-20 sm:pb-40">
            {DownloadsCopy.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="font-semibold text-2xl sm:text-4xl text-blue-950 mb-8">{item.heading}</h2>
                        <p className="text-lg sm:text-xl text-neutral-500 xl:px-40 2xl:px-70 mb-20">{item.paragraph}</p>
                    </div>
                </div>
            ))}
            <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-10 sm:space-y-0 justify-center items-center">
                {DownloadsCards.map((cardItem, index) => (
                    <div key={index} className={`${cardMargin[index]} bg-neutral-50 overflow-hidden flex flex-col shadow-xl shadow-blue-600/15 py-5 px-5 max-w-68 rounded-xl items-center text-center`}>
                        <div className="flex items-center aspect-[1/1] max-h-24  mb-5">
                            <Image
                                src={cardItem.icon}
                                alt={cardItem.title}
                                width={100}
                                height={100}
                                className="scale-100 z-200"
                            />
                        </div>
                        <h3 className="font-semibold text-blue-950 text-xl mb-1">{cardItem.title}</h3>
                        <p className="text-md font-medium text-neutral-500 mb-8">{cardItem.version}</p>
                        <div className="w-85 mb-5 bottom-20">
                            <Image
                                src={'/bg-dots.svg'}
                                alt="Dots"
                                width={350}
                                height={10}
                            />
                        </div>
                        <Button
                            btnColor="bg-blue-600"
                            btnLabel="Add & Install Extension"
                            btnBorder="border-blue-600"
                            btnClasses="font-medium pr-5 pl-5"
                            btnBorderHover="hover:border-blue-600"
                            textColorHover="hover:text-blue-600"
                        />

                    </div>
                ))}
            </div>
        </div>
    )
}