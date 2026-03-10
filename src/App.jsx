import "./App.css";
import Layout from "./layout/Layout";
import { BuyTokenSection } from "./components/BuyTokenSection";
import { DualEngineSection } from "./components/DualEngineSection";
import { EcosystemSection } from "./components/EcosystemSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InfiniteCarousel } from "./components/InfiniteCarousel";
import { InsightsSection } from "./components/InsightsSection";
import { ProtocolSection } from "./components/ProtocolSection";
import { Tokenomics } from "./components/TokenomicsSection";
import { useEffect } from "react";
import { WhitepaperSection } from "./components/WhitepaperSection";
import { Card } from "./components/Card";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".imgAnimate");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Layout>
      <Hero />

      <section className="md:my-30 my-8">
        <img src="/bgbox.png"></img>
      </section>

      <ProtocolSection />
      <InsightsSection />
      <BuyTokenSection />

      <section className="my-25">
        <div className="grid gap-y-6 justify-items-center">
          <h1 className="font-orbitron md:text-3xl text-xl">
            Order Book Integeration
          </h1>
          <InfiniteCarousel />
        </div>
      </section>

      <DualEngineSection />

      <section className="bg-[#010503] my-10 md:px-20 px-5 py-8">
        <div className="grid gap-y-4 justify-center text-center">
          <img
            src="/theteam.png"
            alt="team.png"
            className="justify-self-center"
          ></img>
          <h1 className="md:text-3xl text-lg font-semibold font-orbitron">
            Built By Industry Veterans
          </h1>
          <p className="text-[#82838f] text-sm text-center">
            A world-class team with deep expertise in traditional finance,
            blockchain technology, and qualitative research.
          </p>
        </div>

        <div className="grid md:grid-flow-col my-15 md:gap-x-4 grid-flow-row gap-y-10">
          <Card
            img="/p1.png"
            name="Alex Chen"
            title="CEO & FOUNDER"
            description="Former Goldman Sachs VP with 10+ years in quantitative trading and Defi protocol design."
          />
          <Card
            img="/p2.png"
            name="Sara Mitchel"
            title="Chief Technology Officer"
            description="Ex-Chainlink engineer, smart, and contract specialist with 5+ years building secure Defi primitives."
          />
          <Card
            img="/p3.png"
            name="Marcus Rodriguez"
            title="Head of Strategy"
            description="Former Bridgewater Associates strategist. Expert in Institutional portfolio management."
          />
          <Card
            img="/p4.png"
            name="Dr. Emily Zhang"
            title="Lead Researcher"
            description="PhD in Financial Engineering from MIT. Specialized in algorithmic trading and risk models."
          />
        </div>
      </section>

      <EcosystemSection />
      <Tokenomics />
      <WhitepaperSection />

      
      </Layout>
    </>
  );
}

export default App;
