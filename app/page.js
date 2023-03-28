import CardDetails from "@/components/CardDetails";
import ChoosingUs from "@/components/ChoosingUs";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WorkSteps from "@/components/WorkSteps";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WorkSteps />
      <Features />
      <CardDetails />
      <ChoosingUs />
      <Clients />
    </>
  );
}
