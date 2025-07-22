import NavBar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Downloads from "@/components/sections/downloads";
import Faq from "@/components/sections/faq";
import Newsletter from "@/components/sections/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-neutral-50" >
      <NavBar />
      <Hero />
      <Features />
      <Downloads />
      <Faq />
      <Newsletter />
      <Footer />
    </main>
  );
}
