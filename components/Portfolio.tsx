import Image from "next/image";
import { Button } from "./ui/button";

interface portfolios{
    id: number;
    src: string;
    demo: string;
    code: string;
}

const portfolios: portfolios[] = [
    {
        id: 1,
        src: '',
        demo: '',
        code: 'https://github.com/breno-gsantos/ecommerce-admin'
    },
    {
        id: 2,
        src: '',
        demo: '',
        code: ''
    },
    {
        id: 3,
        src: '',
        demo: '',
        code: ''
    },
    {
        id: 4,
        src: '',
        demo: '',
        code: ''
    },
    {
        id: 5,
        src: '',
        demo: '',
        code: ''
    },
    {
        id: 6,
        src: '',
        demo: '',
        code: ''
    },
]

export default function Portfolio() {
    return (
        <div data-name='portfolio' className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Dê uma olhada em algum dos meus projetos</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map((portfolio) => (
                        <div key={portfolio.id} className="shadow-md shadow-gray-600 rounded-lg">
                            <Image src={portfolio.src} alt="" className="rounded-md duration-200 hover:scale-105" />
                            <div className="flex items-center justify-center">
                                <Button variant='demo'>Demo</Button>
                                <Button variant='demo'>Code</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}