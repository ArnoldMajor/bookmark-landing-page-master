import { FeaturesCopy } from "@/data/data";
import FeaturesSlider from "../features-slider";

export default function Features() {
    return (
        <section className="px-40 2xl:px-80 pb-60">
            {FeaturesCopy.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center justify-center text-center">
                        <h2 className="font-semibold text-4xl text-blue-950 mb-8">{item.heading}</h2>
                        <p className="text-xl text-neutral-500 px-70 mb-8">{item.paragraph}</p>
                    </div>

                </div>
            ))}
            <FeaturesSlider />
        </section>
    )
}

