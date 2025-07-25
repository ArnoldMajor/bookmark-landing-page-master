import { FeaturesCopy } from "@/data/data";
import FeaturesSlider from "../features-slider";

export default function Features() {
    return (
        <div className="flex flex-col px-5 sm:px-20 xl:px-40 2xl:px-80 lg:pb-60 mb-20">
            {FeaturesCopy.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="font-semibold text-2xl sm:text-4xl text-blue-950 mb-8">{item.heading}</h2>
                        <p className="text-lg sm:text-xl text-neutral-500 xl:px-40 2xl:px-70 mb-8">{item.paragraph}</p>
                    </div>

                </div>
            ))}
            <FeaturesSlider />
        </div>
    )
}

