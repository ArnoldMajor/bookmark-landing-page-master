import { newsletterCopy } from "@/data/data"
import Form from 'next/form'
import Button from "../button"

export default function Newsletter() {
    return (
        <div className="px-5 sm:px-20 xl:px-40 2xl:px-80 py-15 2xl:pb-30 bg-blue-600">
            {newsletterCopy.map((item, index) => (
                <div key={index} className="text-center flex flex-col items-center justify-center">
                    <p className="mb-8 2xl:mb-16 text-sm 2xl:text-2xl tracking-widest uppercase text-neutral-50 font-medium ">
                        {item.stat}</p>
                    <h1 className="mb-8 2xl:mb-16 text-neutral-50 font-bold text-3xl 2xl:text-5xl">
                        {item.title}
                    </h1>
                    <div>
                        <Form action="/search" className="flex flex-col sm:flex-row items-center gap-2 ">
                            <input
                                name="email"
                                type="text"
                                placeholder="Enter your email address"
                                className="bg-neutral-50 rounded-md
                                text-blue-950 pr-15 sm:w-auto w-80
                                py-3 px-5 text-sm 2xl:text-xl placeholder:text-neutral-400 border-2
                                border-neutral-50 focus:outline-none focus:border-red-400 
                                " />
                            <div >
                                <Button
                                    paddingX="2xl:px-15 px-4"
                                    btnLabel="Contact Us"
                                    btnColor="bg-red-400"
                                    btnBorder="border-red-400"
                                    btnBorderHover="hover:border-red-400"
                                    textColorHover="hover:text-red-400"
                                    btnClasses="font-medium 2xl:text-xl sm:w-auto w-80" />
                            </div>
                        </Form>
                    </div>
                </div>
            ))}
        </div>
    )
}