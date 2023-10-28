import Portfolio from "@/components/Portfolio";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SocialLinks from "@/components/social-links";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </main>
  )
}
