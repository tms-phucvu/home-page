"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

const ELEMENTS = [
  { label: "AI", size: 22 },
  { label: "TomoGPT", size: 13 },
  { label: "⚡", size: 24 },
  { label: "LLM", size: 14 },
  { label: "🤖", size: 26 },
  { label: "RAG", size: 13 },
  { label: "Neural", size: 13 },
  { label: "✦", size: 20 },
  { label: "Claude", size: 13 },
  { label: "🧠", size: 24 },
  { label: "Vector", size: 13 },
  { label: "AGI", size: 18 },
  { label: "💡", size: 22 },
  { label: "MCP", size: 13 },
  { label: "Agents", size: 13 },
  { label: "◈", size: 20 },
  { label: "Diffusion", size: 12 },
  { label: "🔮", size: 22 },
  { label: "Fine-tune", size: 11 },
  { label: "○", size: 18 },
]

const COLORS = [
  "text-cyan-500/60 dark:text-cyan-300/50",
  "text-pink-500/60 dark:text-pink-300/50",
  "text-violet-500/60 dark:text-violet-300/50",
  "text-sky-500/60 dark:text-sky-300/50",
  "text-rose-400/60 dark:text-rose-300/50",
]

export default function FallingElementsPanel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const elRefs = useRef<Array<React.RefObject<HTMLDivElement | null>>>(
    ELEMENTS.map(() => ({ current: null })),
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const { width, height } = container.getBoundingClientRect()

    const ctx = gsap.context(() => {
      ELEMENTS.forEach((el, i) => {
        const ref = elRefs.current[i].current
        if (!ref) return

        const elW = ref.offsetWidth || 40
        const elH = ref.offsetHeight || 24

        function animateDrop(firstDelay = 0) {
          const startX = Math.random() * (width - elW)

          gsap.set(ref!, {
            x: startX,
            y: -elH - Math.random() * 80,
            rotation: (Math.random() - 0.5) * 18,
            opacity: 0,
          })

          // dur dài hơn: 10–18s, cảm giác trôi nhẹ
          const dur = 10 + Math.random() * 8

          gsap.to(ref!, {
            x: startX + (Math.random() - 0.5) * 40,
            y: height + elH + 10,
            rotation: `+=${(Math.random() > 0.5 ? 1 : -1) * (8 + Math.random() * 18)}`,
            duration: dur,
            delay: firstDelay,
            ease: "none",
            onComplete: () => animateDrop(0),
          })

          // fade in → hold → fade out riêng biệt, overlap với tween trên
          gsap.to(ref!, {
            keyframes: [
              { opacity: 0, duration: 0 },
              { opacity: 0.9, duration: 1.8, ease: "power2.out" },
              { opacity: 0.9, duration: dur - 1.8 - 2.2 },
              { opacity: 0, duration: 2.2, ease: "power2.in" },
            ],
            delay: firstDelay,
            duration: dur,
          })
        }

        animateDrop(i * 0.55 + Math.random() * 2)
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-xl bg-linear-to-br from-cyan-100 to-pink-100 dark:from-cyan-700 dark:to-pink-950"
    >
      {/* eslint-disable-next-line react-hooks/refs */}
      {ELEMENTS.map((el, i) => (
        <div
          key={i}
          ref={elRefs.current[i] as React.RefObject<HTMLDivElement | null>}
          className={`absolute font-mono font-semibold whitespace-nowrap select-none ${COLORS[i % COLORS.length]}`}
          style={{ fontSize: el.size }}
        >
          {el.label}
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-40 w-40 rounded-full bg-white/25 blur-3xl dark:bg-white/10" />
      </div>
    </div>
  )
}
