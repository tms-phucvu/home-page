"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { GlobeConfig } from "@/features/top/components/effects/globe"

const World = dynamic(
  () => import("@/features/top/components/effects/globe").then((m) => m.World),
  {
    ssr: false,
  },
)

const globeConfig: GlobeConfig = {
  pointSize: 4,
  globeColor: "#0d2044",
  showAtmosphere: true,
  atmosphereColor: "#3a7bd5",
  atmosphereAltitude: 0.2,
  emissive: "#061020",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(120,200,255,0.8)",
  ambientLight: "#ffffff",
  directionalLeftLight: "#a0c8ff",
  directionalTopLight: "#ffffff",
  pointLight: "#6ec6ff",
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
    color: "#3a7bd5",
  },
  {
    order: 2,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.35,
    color: "#6ec6ff",
  },
  {
    order: 3,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.42,
    color: "#4fa3e3",
  },
  {
    order: 4,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.3,
    color: "#a8d4f5",
  },
  {
    order: 5,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.2,
    color: "#3a7bd5",
  },
  {
    order: 6,
    startLat: 22.3193,
    startLng: 114.1694,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.45,
    color: "#6ec6ff",
  },
  {
    order: 7,
    startLat: 55.7558,
    startLng: 37.6173,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.38,
    color: "#4fa3e3",
  },
  {
    order: 8,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: 48.8566,
    endLng: 2.3522,
    arcAlt: 0.5,
    color: "#3a7bd5",
  },
  {
    order: 9,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.36,
    color: "#a8d4f5",
  },
  {
    order: 10,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: -33.8688,
    endLng: 151.2093,
    arcAlt: 0.28,
    color: "#6ec6ff",
  },
]

function GridLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(58,123,213,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(58,123,213,0.06) 1px, transparent 1px)
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
      className="absolute hidden items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-950/60 px-3 py-1.5 backdrop-blur-sm md:flex"
      style={{
        left: x,
        top: y,
        animation: `floatBadge 6s ease-in-out ${delay} infinite`,
        fontSize: "11px",
        color: "#a8d4f5",
        letterSpacing: "0.04em",
      }}
    >
      <span
        className="block h-1.5 w-1.5 rounded-full bg-blue-400"
        style={{ animation: `pulse 2s ease-in-out ${delay} infinite` }}
      />
      {children}
    </div>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#03080f]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&family=Syne:wght@400;700;800&display=swap');

        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); opacity: 0.7; }
          50% { transform: translateY(-8px); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes glitch {
          0%, 92%, 100% { clip-path: none; transform: none; }
          93% { clip-path: inset(30% 0 50% 0); transform: translateX(-4px); }
          95% { clip-path: inset(60% 0 20% 0); transform: translateX(4px); }
          97% { clip-path: inset(10% 0 70% 0); transform: translateX(-2px); }
        }
        .hero-label {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #4fa3e3;
        }
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          line-height: 1.1;
        }
        .hero-body {
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 300;
          line-height: 1.9;
        }
        .hero-cta {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .glow-text {
          animation: glitch 8s ease-in-out infinite;
        }
      `}</style>

      {/* Deep radial background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 70% 50%, #0a1e3d 0%, #03080f 70%)",
        }}
      />

      {/* Grid overlay */}
      <GridLines />

      {/* Scanline effect */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]"
        style={{ zIndex: 1 }}
      >
        <div
          className="absolute inset-x-0 h-[2px] bg-blue-300"
          style={{ animation: "scanline 8s linear infinite" }}
        />
      </div>

      {/* Left edge accent */}
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #3a7bd5 30%, #3a7bd5 70%, transparent)",
          opacity: 0.3,
        }}
      />

      {/* Globe — right side */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2"
        style={{
          width: "min(680px, 100vw)",
          height: "min(680px, 100vw)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      >
        {mounted && <World globeConfig={globeConfig} data={arcs} />}
      </div>

      {/* Vignette over globe edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(to right, #03080f 25%, transparent 55%, #03080f 100%)",
          zIndex: 2,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #03080f 0%, transparent 15%, transparent 85%, #03080f 100%)",
          zIndex: 2,
        }}
      />

      {/* Floating tech badges */}
      <FloatingBadge delay="0s" x="58%" y="18%">
        AI Integration
      </FloatingBadge>
      <FloatingBadge delay="1.5s" x="62%" y="75%">
        IoT Network
      </FloatingBadge>
      <FloatingBadge delay="3s" x="52%" y="82%">
        Smart City
      </FloatingBadge>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-16">
        <div className="max-w-xl">
          {/* Top label */}
          <div
            className="mb-6 flex items-center gap-3"
            style={{ animation: "fadeSlideUp 0.6s ease both" }}
          >
            <div className="h-px max-w-[40px] flex-1 bg-blue-500/50" />
            <span className="hero-label">TOMOSIA × Society 5.0</span>
          </div>

          {/* Main title */}
          <h1
            className="hero-title glow-text mb-6"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              color: "#e8f4ff",
              animation: "fadeSlideUp 0.7s ease 0.1s both",
            }}
          >
            あなたのビジネスを
            <br />
            <span style={{ color: "#4fa3e3" }}>Society 5.0</span>
            <br />
            に進めましょう！
          </h1>

          {/* Divider */}
          <div
            className="mb-6 flex items-center gap-3"
            style={{ animation: "fadeSlideUp 0.7s ease 0.2s both" }}
          >
            <div className="h-px w-12 bg-blue-500/60" />
            <div className="h-px flex-1 bg-blue-500/10" />
          </div>

          {/* Body */}
          <p
            className="hero-body mb-10"
            style={{
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              color: "#7aaed4",
              animation: "fadeSlideUp 0.7s ease 0.3s both",
            }}
          >
            TOMOSIAは、お客様がSociety 5.0に合わせて
            <br className="hidden md:block" />
            サービスを推進できるように、能力を提供する
            <br className="hidden md:block" />
            5.0ソリューションを目指しています。
          </p>

          {/* CTA button */}
          <div style={{ animation: "fadeSlideUp 0.7s ease 0.45s both" }}>
            <a
              href="https://tomosia.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta group inline-flex items-center gap-3 rounded-none border px-8 py-4 transition-all duration-300"
              style={{
                borderColor: "#3a7bd5",
                color: "#e8f4ff",
                fontSize: "13px",
                background: "transparent",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = "#3a7bd5"
                el.style.color = "#ffffff"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = "transparent"
                el.style.color = "#e8f4ff"
              }}
            >
              <span>お問い合わせ</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              <span className="pointer-events-none absolute top-0 left-0 h-2 w-2 border-t border-l border-blue-300/50" />
              <span className="pointer-events-none absolute right-0 bottom-0 h-2 w-2 border-r border-b border-blue-300/50" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
