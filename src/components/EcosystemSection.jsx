import "../App.css";
import { useEffect } from "react";

export function EcosystemSection() {
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
    <section className="md:px-25 px-6 py-6 bg-[#0a0a0a]">
      <div className="grid gap-y-4 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold font-orbitron">
          Ecosystem Partners
        </h1>
        <p className="md:text-sm text-lg text-primary">
          A world-class team with deep expertise in traditional finance,
          blockchain technology, and quantitative research.
        </p>
      </div>

      <div className="grid md:grid-cols-5 grid-cols-2 mt-4 gap-x-4 gap-y-2 justify-self-center">
        <img className="imgAnimate section" src="/i1.png" alt="frame.png"></img>
        <img className="imgAnimate section" src="/i2.png" alt="frame.png"></img>
        <img className="imgAnimate section" src="/i3.png" alt="frame.png"></img>
        <img className="imgAnimate section" src="/i4.png" alt="frame.png"></img>
        <img className="imgAnimate section" src="/i5.png" alt="frame.png"></img>
        <img className="imgAnimate section" src="/i6.png" alt="frame.png"></img>
        <img className="imgAnimate section" src="/i7.png" alt="frame.png"></img>
        <img className="imgAnimate section" src="/i8.png" alt="frame.png"></img>
        <img className="imgAnimate section" src="/i9.png" alt="frame.png"></img>
        <img
          className="imgAnimate section"
          src="/i10.png"
          alt="frame.png"
        ></img>
        <img
          className="imgAnimate section"
          src="/i11.png"
          alt="frame.png"
        ></img>
        <img
          className="imgAnimate section"
          src="/i12.png"
          alt="frame.png"
        ></img>
        <img
          className="imgAnimate section"
          src="/i13.png"
          alt="frame.png"
        ></img>
        <img
          className="imgAnimate section"
          src="/i14.png"
          alt="frame.png"
        ></img>
      </div>
    </section>
  );
}
