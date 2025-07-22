import { DownloadsCards, DownloadsCopy } from "@/data/data";
import Image from "next/image";
import Button from "../button";

export default function Downloads() {
    const cardMargin = ['translate-y-0', 'translate-y-10', 'translate-y-20']
    return (
        <section className="px-40 2xl:px-80 pb-60 pt-10">
            {DownloadsCopy.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="font-semibold text-4xl text-blue-950 mb-8">{item.heading}</h2>
                        <p className="text-xl text-neutral-500 px-65 mb-20">{item.paragraph}</p>
                    </div>
                </div>
            ))}
            <div className="flex flex-row justify-center space-x-10">
                {DownloadsCards.map((cardItem, index) => (
                    <div key={index} className={`${cardMargin[index]} bg-neutral-50 relative overflow-hidden flex flex-col shadow-xl shadow-blue-600/15 py-5 px-5 rounded-xl items-center text-center`}>
                        <div className="flex items-center aspect-[1/1] max-h-24 mb-5">
                            <Image
                                src={cardItem.icon}
                                alt={cardItem.title}
                                width={100}
                                height={100}
                                className="scale-100 z-200"
                            />
                        </div>
                        <h3 className="font-semibold text-blue-950 text-xl mb-1">{cardItem.title}</h3>
                        <p className="text-md font-medium text-neutral-500 mb-15">{cardItem.version}</p>
                        <div className="absolute mb-2 bottom-20">
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
        </section>
    )
}