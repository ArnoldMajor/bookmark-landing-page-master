'use client'
import Link from "next/link"

export default function Button({
    btnLabel = "Button",
    btnClasses = "",
    textColor = 'text-neutral-50',
    btnBorder = 'border-black',
    btnColor = "bg-black",
    textColorHover = 'hover:text-black',
    btnBorderHover = 'hover:border-black' }) {
    return (
        <Link href="#">
            <button
                className={`${btnClasses} flex shadow-lg shadow-blue-600/10 justify-center items-center py-3 px-10 
                ${textColor} ${btnColor} cursor-pointer rounded-md 
                ${btnBorder} border-2 hover:bg-neutral-50 
                ${textColorHover} ${btnBorderHover}`}>
                {btnLabel}
            </button>
        </Link>
    )
}