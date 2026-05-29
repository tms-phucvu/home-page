"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import { GlobeConfig } from "@/features/top/components/effects/globe"

const World = dynamic(
  () => import("@/features/top/components/effects/globe").then((m) => m.World),
  {
    ssr: false,
  },
)

// --primary: oklch(0.7105 0.1185 201.91) = #3bb6ba
// Palette derived from primary:
//   dark bg:    #071a1b  (very dark teal-black, lighter than before)
//   mid bg:     #0d2e30  (radial glow center)
//   primary:    #3bb6ba
//   light:      #6dd4d7
//   lighter:    #9de0e2
//   text main:  #e6f9fa
//   text body:  #a8e6e8  (lighter than before for readability)
//   text muted: #5ab8bb

const PRIMARY = "#3bb6ba"
const PRIMARY_LIGHT = "#6dd4d7"
const PRIMARY_LIGHTER = "#9de0e2"
const BG_BASE = "#071a1b"
const BG_GLOW = "#0d2e30"
const TEXT_MAIN = "#e6f9fa"
const TEXT_BODY = "#b8eaec"

const globeConfig: GlobeConfig = {
  pointSize: 4,
  globeColor: "#0a2628",
  showAtmosphere: true,
  atmosphereColor: PRIMARY,
  atmosphereAltitude: 0.2,
  emissive: "#041214",
  emissiveIntensity: 0.08,
  shininess: 0.9,
  polygonColor: "rgba(59,182,186,0.75)",
  ambientLight: "#ffffff",
  directionalLeftLight: PRIMARY_LIGHT,
  directionalTopLight: "#ffffff",
  pointLight: PRIMARY_LIGHT,
  arcTime: 1800,
  arcLength: 0.85,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.5,
}

const arcs = [
  {
    order: 1,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.4,
    color: PRIMARY,
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.35,
    color: PRIMARY_LIGHT,
  },
  {
    order: 3,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.42,
    color: PRIMARY,
  },
  {
    order: 4,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: PRIMARY_LIGHTER,
  },
  {
    order: 5,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.2,
    color: PRIMARY,
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.45,
    color: PRIMARY_LIGHT,
  },
  {
    order: 7,
    startLat: 55.7558,
    startLng: 37.6173,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.38,
    color: PRIMARY,
  },
  {
    order: 8,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.5,
    color: PRIMARY,
  },
  {
    order: 9,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.36,
    color: PRIMARY_LIGHTER,
  },
  {
    order: 10,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.28,
    color: PRIMARY_LIGHT,
  },
]

function GridLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59,182,186,0.09) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,182,186,0.09) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      }}
    />
  )
}

function FloatingBadge({
  delay,
  x,
  y,
  children,
}: {
  delay: string
  x: string
  y: string
  children: string
}) {
  return (
    <div
      className="absolute hidden items-center gap-1.5 rounded-full px-3 py-1.5 backdrop-blur-sm md:flex"
      style={{
        left: x,
        top: y,
        animation: `floatBadge 6s ease-in-out ${delay} infinite`,
        fontSize: "11px",
        color: PRIMARY_LIGHTER,
        letterSpacing: "0.04em",
        border: `1px solid ${PRIMARY}33`,
        background: `${BG_BASE}cc`,
      }}
    >
      <span
        className="block h-1.5 w-1.5 rounded-full"
        style={{
          background: PRIMARY,
          animation: `heroPulse 2s ease-in-out ${delay} infinite`,
        }}
      />
      {children}
    </div>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations("homePage.heroSection")

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  return (
    <section
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{
        background: BG_BASE,
        // CSS custom property so other components can reference --primary
        ["--primary" as string]: PRIMARY,
        ["--primary-light" as string]: PRIMARY_LIGHT,
        ["--primary-lighter" as string]: PRIMARY_LIGHTER,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&family=Syne:wght@400;700;800&display=swap');

        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); opacity: 0.75; }
          50%       { transform: translateY(-8px); opacity: 1; }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes glitch {
          0%, 92%, 100% { clip-path: none; transform: none; }
          93%  { clip-path: inset(30% 0 50% 0); transform: translateX(-4px); }
          95%  { clip-path: inset(60% 0 20% 0); transform: translateX(4px); }
          97%  { clip-path: inset(10% 0 70% 0); transform: translateX(-2px); }
        }
        .hero-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--primary);
        }
        .hero-title {
          font-weight: 800;
          line-height: 1.1;
        }
        .hero-body {
          font-weight: 300;
          line-height: 1.9;
        }
        .hero-cta {
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .glow-text { animation: glitch 8s ease-in-out infinite; }
        .hero-cta:hover { background: var(--primary) !important; color: #fff !important; }
      `}</style>

      {/* Radial background — lighter glow center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 70% 50%, ${BG_GLOW} 0%, ${BG_BASE} 65%)`,
        }}
      />

      {/* Grid */}
      <GridLines />

      {/* Scanline */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.04]"
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute inset-x-0 h-[2px]"
          style={{ background: PRIMARY, animation: "scanline 8s linear infinite" }}
        />
      </div>

      {/* Left edge accent */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-px"
        style={{
          background: `linear-gradient(to bottom, transparent, ${PRIMARY} 30%, ${PRIMARY} 70%, transparent)`,
          opacity: 0.35,
        }}
      />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to right, ${BG_BASE} 22%, transparent 52%, ${BG_BASE} 100%)`,
          zIndex: 2,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${BG_BASE} 0%, transparent 14%, transparent 86%, ${BG_BASE} 100%)`,
          zIndex: 2,
        }}
      />

      {/* Globe */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2"
        style={{
          width: "min(680px, 100vw)",
          height: "min(680px, 100vw)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease",
          zIndex: 3,
        }}
      >
        {mounted && <World globeConfig={globeConfig} data={arcs} />}
      </div>

      {/* Floating badges */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 4 }}>
        <FloatingBadge delay="0s" x="58%" y="18%">
          {t("badge1")}
        </FloatingBadge>
        <FloatingBadge delay="1.5s" x="62%" y="75%">
          {t("badge2")}
        </FloatingBadge>
        <FloatingBadge delay="3s" x="52%" y="82%">
          {t("badge3")}
        </FloatingBadge>
      </div>

      {/* Main content */}
      <div className="pointer-events-none relative z-[4] mx-auto w-full max-w-7xl px-6 md:px-16">
        <div className="pointer-events-auto max-w-xl">
          {/* Label */}
          <div
            className="mb-6 flex items-center gap-3"
            style={{ animation: "fadeSlideUp 0.6s ease both" }}
          >
            <div className="h-px max-w-[40px] flex-1" style={{ background: `${PRIMARY}80` }} />
            <span className="hero-label">{t("label")}</span>
          </div>

          {/* Title */}
          <h1
            className="hero-title glow-text mb-6"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: TEXT_MAIN,
              animation: "fadeSlideUp 0.7s ease 0.1s both",
            }}
          >
            {t("titleLine1")}
            <br />
            <span style={{ color: "var(--primary)" }}>{t("titleHighlight")}</span>
            <br />
            {t("titleLine3")}
          </h1>

          {/* Divider */}
          <div
            className="mb-6 flex items-center gap-3"
            style={{ animation: "fadeSlideUp 0.7s ease 0.2s both" }}
          >
            <div className="h-px w-12" style={{ background: `${PRIMARY}99` }} />
            <div className="h-px flex-1" style={{ background: `${PRIMARY}18` }} />
          </div>

          {/* Body */}
          <p
            className="hero-body mb-10"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              color: TEXT_BODY,
              animation: "fadeSlideUp 0.7s ease 0.3s both",
            }}
          >
            {t("description")}
          </p>

          {/* CTA */}
          <div style={{ animation: "fadeSlideUp 0.7s ease 0.45s both" }}>
            <a
              href="https://tomosia.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta group inline-flex items-center gap-3 transition-all duration-300"
              style={{
                border: `1px solid ${PRIMARY}`,
                color: TEXT_MAIN,
                fontSize: "13px",
                background: "transparent",
                position: "relative",
                padding: "14px 32px",
              }}
            >
              <span>{t("cta")}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* corner accents */}
              <span
                className="pointer-events-none absolute top-0 left-0 h-2 w-2 border-t border-l"
                style={{ borderColor: `${PRIMARY_LIGHT}60` }}
              />
              <span
                className="pointer-events-none absolute right-0 bottom-0 h-2 w-2 border-r border-b"
                style={{ borderColor: `${PRIMARY_LIGHT}60` }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
