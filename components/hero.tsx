import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section data-name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full md:pr-8">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">Eu Sou Desenvolvedor Full Stack</h2>
          <p className="text-gray-500 py-4 max-w-md">Estou a pouco mais de um ano estudando e criando aplicações web. Atualmente eu amo desenvolver aplicações usando as mais modernas tecnologias como Next JS, React, Typescript, TailwindCSS, Shadcn-UI e Prisma</p>
          <div>
            <Button variant='portfolio' size='lg'>
                Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
        <div className="mt-8 md:mt-2">
          <Image src='/heroImage.jpg' alt="hero image" width={476} height={524} className="rounded 2xl mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;