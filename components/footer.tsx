import Image from "next/image"
import Link from "next/link"
import { NavLinks } from "@/data/data"
import LogoWhiteText from "./Logowhitetext"

export default function Footer() {
    return (
        <div className="sticky top-0 px-40 2xl:px-80 bg-blue-950 py-8 flex items-center justify-between z-9999">
            <div className="flex flex-row">
                <div className="mr-20">
                    <LogoWhiteText />
                </div>
                <div className="flex flex-row items-center gap-x-10">
                    <div>
                        <ul className="flex gap-10 list-none uppercase">
                            {NavLinks.map((item, index) => (
                                <li key={index}>
                                    <Link href="#" className="text-neutral-50 hover:text-red-400">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-4">
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

        </div >
    )
}
