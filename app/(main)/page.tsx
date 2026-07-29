
import Advantage from "@/components/adantages";
import Cta from "@/components/cta";
import ProcessSection from "@/components/howitworks";
import Problem from "@/components/problems";
import PublicHero from "@/components/public/hero";

export default function page() {
  return (
    <main className="">
      <PublicHero />
      <Problem />
      <ProcessSection />
      <Advantage />
      <Cta />
    </main>
  );
}
