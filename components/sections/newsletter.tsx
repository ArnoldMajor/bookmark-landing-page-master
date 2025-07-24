import { newsletterCopy } from "@/data/data"
import Form from 'next/form'
import Button from "../button"

export default function Newsletter() {
    return (
        <div className="px-5 sm:px-20 xl:px-40 2xl:px-80 py-15 bg-blue-600">
            {newsletterCopy.map((item, index) => (
                <div key={index} className="text-center flex flex-col items-center justify-center">
                    <p className="mb-8 not-odd:text-sm tracking-widest uppercase text-neutral-50 font-medium ">
                        {item.stat}</p>
                    <h1 className="mb-8 text-neutral-50 font-bold text-3xl">
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
                                py-3.5 px-5 text-sm placeholder:text-neutral-400 border-2
                                border-neutral-50 focus:outline-none focus:border-red-400 
                                " />
                            <div >
                                <Button
                                    btnLabel="Contact Us"
                                    btnColor="bg-red-400"
                                    btnBorder="border-red-400"
                                    btnBorderHover="hover:border-red-400"
                                    textColorHover="hover:text-red-400"
                                    btnClasses="font-medium sm:w-auto w-80" />
                            </div>
                        </Form>
                    </div>
                </div>
            ))}
        </div>
    )
}