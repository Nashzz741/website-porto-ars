import Hero from "@/components/home/Hero";
import AgencyIntro from "@/components/home/AgencyIntro";
import SelectedWork from "@/components/home/SelectedWork";
import Skills from "@/components/home/Skills";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col relative min-h-screen bg-background">
      <Hero />
      <AgencyIntro />
      <SelectedWork />
      <Skills />
      <Footer />
    </main>
  );
}
