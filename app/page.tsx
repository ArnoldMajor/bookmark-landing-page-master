import NavBar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Downloads from "@/components/sections/downloads";
import Faq from "@/components/sections/faq";
import Newsletter from "@/components/sections/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-neutral-50 scroll-smooth transition-all ease-in-out delay-200" >
      <NavBar />
      <section>
        <Hero />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Downloads />
      </section>
      <section>
        <Faq />
      </section>
      <section>
        <Newsletter />
        <Footer />
      </section>
    </main>
  );
}
