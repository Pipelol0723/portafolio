"use client";

import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import bizchat from "../../public/bizchat.png";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="work"
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
        02 <span style={{ color: "#3d444d" }}>//</span> {t.work_title}
      </div>

      <div
        data-workgrid="1"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr)",
          gap: "clamp(20px,3vw,40px)",
          alignItems: "center",
          border: "1px solid #1c2126",
          borderRadius: 16,
          background: "linear-gradient(180deg,#0f1315,#0b0d0e)",
          padding: "clamp(18px,2.5vw,26px)",
        }}
      >
        {/* browser window with screenshot */}
        <div
          style={{
            border: "1px solid #232a30",
            borderRadius: 12,
            overflow: "hidden",
            background: "#14181b",
            boxShadow: "0 24px 60px -34px rgba(0,0,0,.9)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "9px 12px",
              background: "#191d21",
              borderBottom: "1px solid #232a30",
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#ff5f57",
              }}
            />
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#febc2e",
              }}
            />
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#28c840",
              }}
            />
            <span
              style={{
                marginLeft: 8,
                flex: 1,
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 11,
                color: "#6e7681",
                background: "#0f1315",
                border: "1px solid #232a30",
                borderRadius: 5,
                padding: "3px 9px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              🔒 bizchat-delta.vercel.app
            </span>
          </div>
          <div
            style={{
              position: "relative",
              height: "clamp(280px,42vh,430px)",
              overflow: "hidden",
              background: "#f3eee5",
            }}
          >
            <Image
              src={bizchat}
              alt="BizChat — demo de chat (Café Noire)"
              placeholder="blur"
              priority
              sizes="(max-width: 760px) 100vw, 560px"
              style={{ objectFit: "contain" }}
              fill
            />
          </div>
        </div>

        {/* text */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 6,
            }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 700,
                fontSize: "clamp(22px,2.6vw,30px)",
                color: "#f0f6fc",
              }}
            >
              BizChat
            </h3>
            <span
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 11,
                color: "var(--accent,#3fb950)",
                border: "1px solid #233b28",
                background: "rgba(63,185,80,.08)",
                padding: "3px 8px",
                borderRadius: 999,
              }}
            >
              {t.proj_badge}
            </span>
          </div>

          <div
            style={{
              fontSize: 15,
              color: "#adbac7",
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            {t.proj_sub}
          </div>

          <p
            style={{
              margin: "0 0 18px",
              fontSize: 15.5,
              lineHeight: 1.65,
              color: "#8b949e",
              fontWeight: 300,
            }}
          >
            {t.proj_desc}
          </p>

          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 12,
              color: "#6e7681",
              marginBottom: 20,
            }}
          >
            {t.proj_stack}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a
              href="https://bizchat-delta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--accent,#3fb950)",
                color: "#08130b",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 700,
                fontSize: 13,
                padding: "10px 16px",
                borderRadius: 8,
              }}
            >
              🔗 {t.live}
            </a>
            <a
              href="https://github.com/Pipelol0723"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid #2a3138",
                color: "#e6edf3",
                background: "#0f1315",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 600,
                fontSize: 13,
                padding: "10px 16px",
                borderRadius: 8,
              }}
            >
              {t.github} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
