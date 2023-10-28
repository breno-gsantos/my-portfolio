import { Github, Linkedin, Mail, User } from "lucide-react"
import { ReactNode } from "react";
import Link from 'next/link'
import { cn } from "@/lib/utils";

interface Links{
    id: number;
    child: ReactNode;
    href: string;
    style?: string;
    download?: boolean
}

const sideBarLink: Links[] = [
    {
        id: 1,
        child: (
            <>
                LinkedIn <Linkedin />
            </>
        ),
        href: 'https://www.linkedin.com/in/breno-giovanni-98658125b/',
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>
                Github <Github />
            </>
        ),
        href: 'https://github.com/breno-gsantos',
    },
    {
        id: 3,
        child: (
            <>
                Mail <Mail />
            </>
        ),
        href: 'mailto:brenogiovanniolintho@gmail.com'
    },
    {
        id: 4,
        child: (
            <>
                Resume <User />
            </>
        ),
        href: '/resume.pdf',
        style: 'rounded-tr-md',
        download: true
    }
]

export default function SocialLinks() {
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {sideBarLink.map((link) => (
                    <li key={link.id} className={cn("flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500", link.style)}>
                        <Link href={link.href} className='flex justify-between items-center w-full text-white' download={link.download} target="_blank" rel="noreferrer">
                            {link.child}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}