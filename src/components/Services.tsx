"use client";

import { useTranslation } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section
      id="services"
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
          marginBottom: 8,
        }}
      >
        03 <span style={{ color: "#3d444d" }}>//</span> {t.services_title}
      </div>
      <p
        style={{
          margin: "0 0 30px",
          fontSize: 15,
          color: "#8b949e",
          fontWeight: 300,
          maxWidth: 560,
        }}
      >
        {t.services_sub}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 16,
        }}
      >
        {t.services.map((sv) => (
          <div
            key={sv.name}
            style={{
              border: "1px solid #1c2126",
              borderRadius: 14,
              background: "#0f1315",
              padding: "24px 22px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ fontSize: 26 }}>{sv.icon}</div>
            <h4
              style={{
                margin: 0,
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 700,
                fontSize: 16,
                color: "#f0f6fc",
                lineHeight: 1.3,
              }}
            >
              {sv.name}
            </h4>
            <p
              style={{
                margin: 0,
                flex: 1,
                fontSize: 14,
                lineHeight: 1.6,
                color: "#8b949e",
                fontWeight: 300,
              }}
            >
              {sv.desc}
            </p>
            <div
              style={{
                borderTop: "1px solid #1c2126",
                paddingTop: 12,
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--accent,#3fb950)",
              }}
            >
              {sv.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
