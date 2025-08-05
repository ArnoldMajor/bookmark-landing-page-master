import { NavLinks } from "@/data/data"
import Link from "next/link"
import Button from "./button"
import Image from "next/image"

export default function MobileMenu() {
    return (
        <div className="lg:hidden px-5 sm:px-20 bg-blue-950/97 h-screen z-9000 py-20 pb-30 ">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <ul className=" flex flex-col list-none uppercase items-center justify-center">
                        {NavLinks.map((item, index) => (
                            <li
                                key={index}
                                className="flex border-t-1 last:border-b-1 border-neutral-500 
                        w-full items-center justify-center py-8">
                                <Link href="#" className="text-neutral-50 hover:text-red-400">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center mt-8">
                        <Link href="/sign-in">
                            <Button btnClasses="uppercase w-80" btnLabel="Login" btnColor="bg-none" btnHover="bg-none" btnBorder="border-neutral-50" textColorHover="hover:text-red-400" btnBorderHover="hover:border-red-400" />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-row gap-4">
                    <a href="#">
                        <Image
                            src="/icons/icon-facebook.svg"
                            alt="Facebook"
                            width={24}
                            height={24}
                        /></a>
                    <a href="#">
                        <Image
                            src="/icons/icon-twitter.svg"
                            alt="Twitter"
                            width={24}
                            height={24}
                        /></a>
                </div>
            </div>
        </div>
    )
}