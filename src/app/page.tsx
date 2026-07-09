import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Theme — matches the design's default props.
const ACCENT = "#3fb950";
const ACCENT_HI = "#56d364";
const SHOW_GRID = true;

export default function Home() {
  return (
    <div
      style={
        {
          "--accent": ACCENT,
          "--accent-hi": ACCENT_HI,
          minHeight: "100vh",
          background: "#0b0d0e",
          color: "#c9d1d9",
          fontFamily: "var(--font-ibm-plex-sans), system-ui, sans-serif",
          position: "relative",
          overflowX: "hidden",
        } as React.CSSProperties
      }
    >
      {SHOW_GRID && (
        <div
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%,#000 40%,transparent 100%)",
          }}
        />
      )}

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
