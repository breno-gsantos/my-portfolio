import { Menu } from "lucide-react";
import { navLinks } from "./navbar";
import Link from "next/link";

export default function Sidebar() {
    return (
        <>
            <div className="cursor pointer pr-4 z-10 text-gray-500">
                <Menu />
            </div>
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                {navLinks.map((link) => (
                    <li key={link.id} className="px-4 py-6 text-4xl">
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </>
        
    )
}