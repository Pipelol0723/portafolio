"use client";

import { useTranslation } from "@/context/LanguageContext";

const activeBtn: React.CSSProperties = {
  padding: "7px 12px",
  border: "none",
  cursor: "pointer",
  background: "var(--accent,#3fb950)",
  color: "#08130b",
};

const idleBtn: React.CSSProperties = {
  padding: "7px 12px",
  border: "none",
  cursor: "pointer",
  background: "#0f1315",
  color: "#8b949e",
};

const navLink: React.CSSProperties = {
  textDecoration: "none",
  color: "#9aa4ae",
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: 13,
};

export default function Navbar() {
  const { lang, setLang, t } = useTranslation();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px clamp(20px,5vw,64px)",
        background: "rgba(11,13,14,.72)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #1c2126",
      }}
    >
      <a
        href="#top"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          textDecoration: "none",
          color: "#e6edf3",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            border: "1.5px solid var(--accent,#3fb950)",
            borderRadius: 7,
            color: "var(--accent,#3fb950)",
            fontSize: 13,
          }}
        >
          AF
        </span>
        <span style={{ opacity: 0.9 }}>
          pipelol<span style={{ color: "var(--accent,#3fb950)" }}>.dev</span>
        </span>
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(12px,2.4vw,30px)",
        }}
      >
        <div
          data-navlinks="1"
          style={{
            display: "none",
            gap: "clamp(14px,2.2vw,28px)",
            alignItems: "center",
          }}
        >
          <a href="#about" style={navLink}>
            about
          </a>
          <a href="#work" style={navLink}>
            work
          </a>
          <a href="#services" style={navLink}>
            services
          </a>
          <a href="#contact" style={navLink}>
            contact
          </a>
        </div>

        <div
          style={{
            display: "inline-flex",
            border: "1px solid #2a3138",
            borderRadius: 8,
            overflow: "hidden",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          <button
            type="button"
            onClick={() => setLang("en")}
            style={lang === "en" ? activeBtn : idleBtn}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("es")}
            style={lang === "es" ? activeBtn : idleBtn}
          >
            ES
          </button>
        </div>

        <a
          href="#contact"
          style={{
            textDecoration: "none",
            background: "var(--accent,#3fb950)",
            color: "#08130b",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontWeight: 700,
            fontSize: 13,
            padding: "8px 15px",
            borderRadius: 8,
            whiteSpace: "nowrap",
          }}
        >
          {t.hire}
        </a>
      </div>
    </nav>
  );
}
