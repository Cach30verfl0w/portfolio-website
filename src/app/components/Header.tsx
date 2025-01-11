"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from "react";

const NavigationButton: React.FC<{ name: string; href: string; }> = ({ name, href }) => {
    const pathname = usePathname()
    return (
        <div>
            <Link href={href} className={`bg-clip-text hover:text-[rgba(0,250,0)] hover:bg-gradient-to-g hover:from-0% hover:to-100% transition-all duration-300 ${pathname === `${href}` ? 'text-[rgba(0,250,0)] font-bold' : ''}`}>{name}</Link>
        </div>
    )
}

export function Header() {
    return (
        <header className="p-4 flex space-x-4">
            <NavigationButton name={"Home"} href={"/"} />
            <NavigationButton name={"Blog"} href={"/blog"} />
        </header>
    )
}
