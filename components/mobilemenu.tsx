import { NavLinks } from "@/data/data"
import Link from "next/link"
import Button from "./button"

export default function MobileMenu() {
    return (
        <div className="lg:hidden px-5 sm:px-20 bg-blue-950/97 h-screen z-9000 py-20 ">
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
                <Button btnClasses="uppercase w-80" btnLabel="Login" btnColor="bg-none" btnHover="bg-none" btnBorder="border-neutral-50" textColorHover="hover:text-red-400" btnBorderHover="hover:border-red-400" />
            </div>
        </div>
    )
}