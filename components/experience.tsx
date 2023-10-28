import { cn } from "@/lib/utils";
import Image from "next/image";

interface technologies{
    id: number;
    src: string;
    title: string;
    style: string;
}

const technologies: technologies[] = [
    {
        id: 1,
        src: '/html.png',
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        src: '/css.png',
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        src: '/javascript.png',
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        src: '/typescript.png',
        title: 'TypeScript',
        style: 'shadow-blue-700'
    },
    {
        id: 5,
        src: '/react.png',
        title: 'React',
        style: 'shadow-cyan-500'
    },
    {
        id: 6,
        src: '/tailwind.png',
        title: 'Tailwind CSS',
        style: 'shadow-sky-400'
    },
    {
        id: 7,
        src: '/nextjs.png',
        title: 'Next JS',
        style: 'shadow-white'
    },
    {
        id: 8,
        src: '/github.png',
        title: 'Github',
        style: 'shadow-gray-500'
    },
    {
        id: 9,
        src: '/prisma.png',
        title: 'Prisma',
        style: 'shadow-gray-500/50'
    },
    {
        id: 10,
        src: '/ruby.png',
        title: 'Ruby on Rails',
        style: 'shadow-red-600'
    },
    {
        id: 11,
        src: '/postgresql.png',
        title: 'PostgreSQL',
        style: 'shadow-blue-300'
    },
]

export default function Experience() {
    return (
        <div data-name='experience' className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experiências</p>
                    <p className="py-6">Tecnologias na qual eu trabalho</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {technologies.map((tech) => (
                        <div key={tech.id} className={cn("shadow-md hover:scale-105 duration-500 py-2 rounded-lg", tech.style)}>
                            <Image src={tech.src} alt={tech.src} width={80} height={80} className="mx-auto"/>
                            <p className="mt-4">{tech.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}