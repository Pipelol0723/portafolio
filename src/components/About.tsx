"use client";

import { useTranslation } from "@/context/LanguageContext";
import { skills } from "@/lib/i18n";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1120,
        margin: "0 auto",
        padding: "clamp(50px,9vh,90px) clamp(20px,5vw,64px)",
        scrollMarginTop: 80,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 13,
          color: "var(--accent,#3fb950)",
          marginBottom: 20,
        }}
      >
        01 <span style={{ color: "#3d444d" }}>//</span> {t.nav_about}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr)",
          gap: 30,
          alignItems: "start",
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <p
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(17px,2vw,22px)",
              lineHeight: 1.6,
              color: "#c9d1d9",
              fontWeight: 300,
            }}
          >
            {t.about_1}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(15px,1.7vw,17px)",
              lineHeight: 1.65,
              color: "#8b949e",
              fontWeight: 300,
            }}
          >
            {t.about_2}
          </p>
        </div>

        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 12,
              color: "#6e7681",
              marginBottom: 12,
            }}
          >
            // stack.json
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 12.5,
                  color: "#adbac7",
                  background: "#0f1315",
                  border: "1px solid #232a30",
                  padding: "6px 11px",
                  borderRadius: 7,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
