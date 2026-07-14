const footerLink: React.CSSProperties = {
  textDecoration: "none",
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: 12.5,
  color: "#adbac7",
  border: "1px solid #232a30",
  padding: "6px 11px",
  borderRadius: 7,
};

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid #1c2126",
        background: "#0b0d0e",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "28px clamp(20px,5vw,64px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 12.5,
            color: "#6e7681",
          }}
        >
          © 2026 Andrés Felipe Céspedes Rondón · Bogotá, Colombia 🇨🇴
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com/Pipelol0723"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLink}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andres-felipe-cespedes-rondon-152990289/"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLink}
          >
            LinkedIn
          </a>
          <a
            href="https://www.workana.com/freelancer/e710ce0731fe8e0905132747a91f863e"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLink}
          >
            Workana
          </a>
          <a
            href="https://www.fiverr.com/afcespedes"
            target="_blank"
            rel="noopener noreferrer"
            style={footerLink}
          >
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
}
