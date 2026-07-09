"use client";

import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import fotoPipe from "../../public/foto-pipe.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <header
      id="top"
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: 1120,
        margin: "0 auto",
        padding:
          "clamp(120px,16vh,180px) clamp(20px,5vw,64px) clamp(60px,9vh,110px)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 12.5,
          color: "#8b949e",
          border: "1px solid #1c2126",
          background: "#0f1214",
          padding: "6px 12px",
          borderRadius: 999,
          marginBottom: 26,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--accent,#3fb950)",
            boxShadow: "0 0 8px var(--accent,#3fb950)",
          }}
        />
        {t.available}
      </div>

      <div
        style={{
          border: "1px solid #1c2126",
          borderRadius: 14,
          background: "linear-gradient(180deg,#0f1315,#0b0d0e)",
          overflow: "hidden",
          boxShadow: "0 30px 80px -40px rgba(0,0,0,.9)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "11px 15px",
            background: "#14181b",
            borderBottom: "1px solid #1c2126",
          }}
        >
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#febc2e",
            }}
          />
          <span
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
          <span
            style={{
              marginLeft: 8,
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 12,
              color: "#6e7681",
            }}
          >
            pipelol@dev — zsh — 80×24
          </span>
        </div>

        <div style={{ padding: "clamp(24px,4vw,44px)" }}>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "clamp(13px,1.5vw,15px)",
              color: "#6e7681",
              marginBottom: 18,
            }}
          >
            <span style={{ color: "var(--accent,#3fb950)" }}>➜</span>{" "}
            <span style={{ color: "#7ee787" }}>~</span> whoami
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(16px,2.4vw,26px)",
              margin: "0 0 20px",
            }}
          >
            <Image
              src={fotoPipe}
              alt="Andrés Felipe Céspedes"
              priority
              placeholder="blur"
              sizes="(max-width: 720px) 64px, 92px"
              style={{
                flex: "none",
                width: "clamp(64px,9vw,92px)",
                height: "clamp(64px,9vw,92px)",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                border: "2px solid var(--accent,#3fb950)",
                boxShadow:
                  "0 0 0 4px rgba(63,185,80,.12),0 14px 34px -14px rgba(0,0,0,.8)",
                filter: "grayscale(.08)",
              }}
            />
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 700,
                fontSize: "clamp(28px,5.4vw,56px)",
                lineHeight: 1.04,
                letterSpacing: "-1.5px",
                color: "#f0f6fc",
              }}
            >
              {t.hero_greeting}
            </h1>
          </div>

          <p
            style={{
              margin: "0 0 8px",
              maxWidth: 640,
              fontSize: "clamp(16px,2vw,21px)",
              lineHeight: 1.55,
              color: "#c9d1d9",
              fontWeight: 300,
            }}
          >
            {t.hero_tagline}
          </p>
          <p
            style={{
              margin: "22px 0 0",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 13,
              color: "#6e7681",
              letterSpacing: ".2px",
            }}
          >
            {t.hero_sub}
          </p>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <a
              href="#work"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "var(--accent,#3fb950)",
                color: "#08130b",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 20px",
                borderRadius: 9,
              }}
            >
              <span style={{ opacity: 0.65 }}>$</span> ./projects <span>↓</span>
            </a>
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                border: "1px solid #2a3138",
                color: "#e6edf3",
                background: "#0f1315",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 600,
                fontSize: 14,
                padding: "12px 20px",
                borderRadius: 9,
              }}
            >
              <span style={{ opacity: 0.55 }}>$</span> ./contact <span>→</span>
            </a>
          </div>

          <div
            style={{
              marginTop: 26,
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 13,
              color: "#6e7681",
            }}
          >
            <span style={{ color: "var(--accent,#3fb950)" }}>➜</span>{" "}
            <span style={{ color: "#7ee787" }}>~</span>{" "}
            <span
              style={{
                display: "inline-block",
                width: 9,
                height: 16,
                background: "var(--accent,#3fb950)",
                verticalAlign: "-3px",
                animation: "blink 1.1s steps(1) infinite",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
