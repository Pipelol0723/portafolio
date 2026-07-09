"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import type { ProjectCategory } from "@/lib/i18n";

type Filter = "all" | ProjectCategory;

const ACCENT = "var(--accent,#3fb950)";

const MEDIA_HEIGHT = "clamp(240px,38vh,400px)";

const dotBrowser = (bg: string): React.CSSProperties => ({
  width: 9,
  height: 9,
  borderRadius: "50%",
  background: bg,
});

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");
  const [index, setIndex] = useState(0);

  const filtered = t.projects.filter((p) => filter === "all" || p.cat === filter);
  const list = filtered.length ? filtered : t.projects;
  const idx = Math.min(index, list.length - 1);
  const current = list[idx] ?? list[0];

  const wrap = (i: number) => ((i % list.length) + list.length) % list.length;
  const goTo = (i: number) => setIndex(wrap(i));
  // Functional update so rapid prev/next clicks each advance from the latest
  // index instead of a stale closure value.
  const step = (delta: number) =>
    setIndex((prev) => wrap(Math.min(prev, list.length - 1) + delta));
  const changeFilter = (f: Filter) => {
    setFilter(f);
    setIndex(0);
  };

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t.filter_all },
    { id: "bots", label: t.filter_bots },
    { id: "apps", label: t.filter_apps },
    { id: "soon", label: t.filter_soon },
  ];

  const tagStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: "var(--font-jetbrains-mono), monospace",
    fontSize: 12.5,
    fontWeight: 700,
    borderRadius: 14,
    padding: "6px 13px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background .15s,color .15s",
    ...(active
      ? { border: `1px solid ${ACCENT}`, background: ACCENT, color: "#08130b" }
      : { border: "1px solid #2a3138", background: "#0f1315", color: "#8b949e" }),
  });

  const arrowBtn = (accent: boolean): React.CSSProperties => ({
    flex: "none",
    width: 38,
    height: 38,
    borderRadius: "50%",
    border: accent ? `1.5px solid ${ACCENT}` : "1.5px solid #2a3138",
    background: "#0f1315",
    color: accent ? ACCENT : "#8b949e",
    fontSize: 17,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

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
          color: ACCENT,
          marginBottom: 20,
        }}
      >
        02 <span style={{ color: "#3d444d" }}>//</span> {t.work_title}
      </div>

      {/* filter tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 9,
          marginBottom: 22,
        }}
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => changeFilter(f.id)}
            style={tagStyle(filter === f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* carousel */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px,1.6vw,18px)",
        }}
      >
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous project"
          style={arrowBtn(false)}
        >
          ‹
        </button>

        <div
          data-workgrid="1"
          style={{
            flex: 1,
            minWidth: 0,
            border: "1px solid #1c2126",
            borderRadius: 16,
            background: "linear-gradient(180deg,#0f1315,#0b0d0e)",
            padding: "clamp(18px,2.5vw,26px)",
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr)",
            gap: 22,
          }}
        >
          {/* media */}
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
              <span style={dotBrowser("#ff5f57")} />
              <span style={dotBrowser("#febc2e")} />
              <span style={dotBrowser("#28c840")} />
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
                {current.url}
              </span>
            </div>

            {current.image ? (
              <div
                style={{
                  position: "relative",
                  height: MEDIA_HEIGHT,
                  overflow: "hidden",
                  background: "#f3eee5",
                }}
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  priority
                  sizes="(max-width: 760px) 100vw, 520px"
                  style={{ objectFit: "contain" }}
                />
              </div>
            ) : (
              <div
                style={{
                  height: MEDIA_HEIGHT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "repeating-linear-gradient(-45deg,#161a1d,#161a1d 12px,#14181b 12px,#14181b 24px)",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    color: "#3d444d",
                  }}
                >
                  <div style={{ fontSize: 15, marginBottom: 6 }}>
                    {current.placeholderIcon}
                  </div>
                  <div style={{ fontSize: 12 }}>{current.placeholderLabel}</div>
                </div>
              </div>
            )}
          </div>

          {/* text */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 10,
                flexWrap: "wrap",
                rowGap: 8,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontWeight: 700,
                  fontSize: "clamp(20px,2.4vw,30px)",
                  color: "#f0f6fc",
                  lineHeight: 1.2,
                }}
              >
                {current.name}
              </h3>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  color: ACCENT,
                  border: "1px solid rgba(63,185,80,.2)",
                  background: "rgba(63,185,80,.08)",
                  padding: "3px 8px",
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                  flex: "none",
                }}
              >
                {current.badge}
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
              {current.sub}
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
              {current.desc}
            </p>

            {current.stack && (
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 12,
                  color: "#6e7681",
                  marginBottom: 20,
                }}
              >
                {current.stack}
              </div>
            )}

            {(current.liveUrl || current.githubUrl) && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {current.liveUrl && (
                  <a
                    href={current.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: ACCENT,
                      color: "#08130b",
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontWeight: 700,
                      fontSize: 13,
                      padding: "10px 16px",
                      borderRadius: 8,
                    }}
                  >
                    🔗 {current.liveLabel}
                  </a>
                )}
                {current.githubUrl && (
                  <a
                    href={current.githubUrl}
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
                )}
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next project"
          style={arrowBtn(true)}
        >
          ›
        </button>
      </div>

      {/* dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 16,
        }}
      >
        {list.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to project ${i + 1}`}
            style={{
              width: i === idx ? 18 : 7,
              height: 7,
              borderRadius: 4,
              border: "none",
              cursor: "pointer",
              padding: 0,
              background: i === idx ? ACCENT : "#2a3138",
              transition: "width .15s",
            }}
          />
        ))}
      </div>
    </section>
  );
}
