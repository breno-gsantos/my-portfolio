import { Menu } from "lucide-react";
import Link from "next/link"
import MobileSidebar from "./mobile-sidebar";

interface navLink{
    id: number;
    label: string;
    href: string
}

export const navLinks: navLink[] = [
    {
        id: 1,
        label: 'Home',
        href: '#home'
    },
    {
        id: 2,
        label: 'About',
        href: '#about'

    },
    {
        id: 3,
        label: 'Portfolio',
        href: '#portfolio'
    },
    {
        id: 4,
        label: 'Experience',
        href: '#experience'
    },
    {
        id: 5,
        label: 'Contact',
        href: '#contact'
    },
]

export default function Navbar() {
    return (
        <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
            <div>
                <h1 className="text-5xl font-signature ml-2">Breno</h1>
            </div>
            <ul className="hidden md:flex">
                {navLinks.map((link) => (
                    <li key={link.id} className="px-4 font-medium text-gray-500 hover:scale-105 duration-200">
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <div className="md:hidden">
               <MobileSidebar /> 
            </div>
            
        </div>
    )
}