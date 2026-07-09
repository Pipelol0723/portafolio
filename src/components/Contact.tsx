"use client";

import { useTranslation } from "@/context/LanguageContext";

const EMAIL = "pipelol0723@gmail.com";

export default function Contact() {
  const { t } = useTranslation();

  // Gmail web "compose" — opens reliably in the browser without depending on a
  // configured desktop mail client (which is what makes plain mailto: links
  // silently do nothing).
  const gmailCompose =
    "https://mail.google.com/mail/?view=cm&fs=1" +
    `&to=${encodeURIComponent(EMAIL)}` +
    `&su=${encodeURIComponent(t.email_subject)}` +
    `&body=${encodeURIComponent(t.email_body)}`;

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1120,
        margin: "0 auto",
        padding:
          "clamp(50px,9vh,90px) clamp(20px,5vw,64px) clamp(60px,9vh,100px)",
        scrollMarginTop: 80,
      }}
    >
      <div
        style={{
          border: "1px solid #1c2126",
          borderRadius: 18,
          background:
            "radial-gradient(120% 140% at 50% 0%,rgba(63,185,80,.07),transparent 60%),#0f1315",
          padding: "clamp(34px,6vw,64px)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13,
            color: "var(--accent,#3fb950)",
            marginBottom: 18,
          }}
        >
          04 <span style={{ color: "#3d444d" }}>//</span> {t.nav_contact}
        </div>
        <h2
          style={{
            margin: "0 auto 14px",
            maxWidth: 640,
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontWeight: 700,
            fontSize: "clamp(26px,4.4vw,44px)",
            lineHeight: 1.12,
            letterSpacing: "-1px",
            color: "#f0f6fc",
          }}
        >
          {t.contact_title}
        </h2>
        <p
          style={{
            margin: "0 auto 30px",
            maxWidth: 500,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#8b949e",
            fontWeight: 300,
          }}
        >
          {t.contact_sub}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
          }}
        >
          <a
            href="https://wa.me/573153769636?text=Hola%20Andr%C3%A9s%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20hablar%20sobre%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--accent,#3fb950)",
              color: "#08130b",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 24px",
              borderRadius: 10,
            }}
          >
            💬 {t.whatsapp}
          </a>
          <a
            href={gmailCompose}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: "1px solid #2a3138",
              color: "#e6edf3",
              background: "#0b0d0e",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 24px",
              borderRadius: 10,
            }}
          >
            ✉️ {t.email}
          </a>
        </div>

        <div
          style={{
            marginTop: 22,
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 12.5,
            color: "#6e7681",
          }}
        >
          pipelol0723@gmail.com · +57 315 376 9636
        </div>
      </div>
    </section>
  );
}
