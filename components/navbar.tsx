'use client'

import Link from "next/link"
import { NavLinks } from "@/data/data"
import Button from "./button"
import Hamburger from "./hamburger"
import Close from "./close"
import LogoColored from "./Logocolored"
import LogoWhiteFull from "./Logowhitefull"
import { use, useState } from "react"
import MobileMenu from "./mobilemenu"


export default function NavBar() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className="flex flex-col fixed top-0 w-full z-9999">
            <div className={`px-5 sm:px-20 xl:px-40 2xl:px-80 lg:bg-neutral-50
        ${menuActive === false ? 'bg-neutral-50' : 'bg-blue-950/97'} 
         py-5 sm:py-10 flex items-center justify-between `}>
                <div>

                    <div className={`${menuActive ? 'hidden' : 'block'} lg:block`}>
                        <LogoColored />
                    </div>

                    <div className={`${menuActive ? 'block' : 'hidden'} lg:hidden`}>
                        <LogoWhiteFull />
                    </div>
                </div>
                <div className="hidden lg:flex flex-row items-center gap-x-10">
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
                <button
                    className="lg:hidden"
                    onClick={
                        () => {
                            setMenuActive(menuActive === false ? true : false)
                        }

                    }>
                    {menuActive === false ? <Hamburger /> : <Close />}
                </button>
            </div>
            {menuActive === true ? <MobileMenu /> : null}
        </div >
    )
}
