import Image from "next/image";

export default function Hamburger() {


    return (
        <div className="flex lg:hidden">
            <Image
                src={'/icons/icon-hamburger.svg'}
                alt="Open Menu"
                width={24}
                height={24}
            />
        </div>
    )
}