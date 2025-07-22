import Image from "next/image"
import Link from "next/link"
import { NavLinks } from "@/data/data"
import Button from "./button"

export default function NavBar() {
    return (
        <div className="sticky top-0 px-40 2xl:px-80 bg-neutral-50 py-10 flex items-center justify-between z-9999">
            <div>
                <Image
                    src="/logo-bookmark.svg"
                    alt="Main Logo"
                    width={150}
                    height={50}
                />
            </div>
            <div className="flex flex-row items-center gap-x-10">
                <div>
                    <ul className="flex gap-10 list-none uppercase">
                        {NavLinks.map((item, index) => (
                            <li key={index}>
                                <Link href="#" className="hover:text-red-400">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <Button btnClasses="uppercase" btnLabel="Login" btnColor="bg-red-400" btnBorder="border-red-400" textColorHover="hover:text-red-400" btnBorderHover="hover:border-red-400" />
                </div>
            </div>
        </div>
    )
}
