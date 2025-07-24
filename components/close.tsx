import Image from "next/image";

export default function Close() {


    return (
        <div className="flex lg:hidden">
            <Image
                src={'/icons/icon-close.svg'}
                alt="Open Menu"
                width={24}
                height={24}
            />
        </div>
    )
}