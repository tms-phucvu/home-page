"use client"

import { useRef, useState } from "react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"
import { cn } from "@/shared/lib/utils"

gsap.registerPlugin(ScrollToPlugin, useGSAP)

interface SnapScrollProps {
  children: React.ReactNode
  duration?: number
  ease?: string
  className?: string
  sectionLabels?: string[]
}

export default function SnapScroll({
  children,
  duration = 1.0,
  ease = "power2.inOut",
  className,
  sectionLabels,
}: SnapScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isScrolling = useRef(false)
  const current = useRef(0)
  const touchStartY = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const goToRef = useRef<(index: number, fromClick?: boolean) => void>(() => {})

  useGSAP(
    (_, contextSafe) => {
      const container = containerRef.current!

      const goTo = contextSafe!((index: number, fromClick?: boolean) => {
        const total = container.querySelectorAll(":scope > *").length ?? 0
        if (index < 0 || index >= total) return
        if (!fromClick && isScrolling.current) return

        current.current = index
        setActiveIndex(index)
        isScrolling.current = true

        gsap.killTweensOf(container)
        gsap.to(container, {
          scrollTo: { y: index * window.innerHeight },
          duration,
          ease,
          onComplete: () => {
            isScrolling.current = false
          },
        })
      })

      goToRef.current = goTo

      const onWheel = (e: WheelEvent) => {
        e.preventDefault()
        goTo(current.current + (e.deltaY > 0 ? 1 : -1))
      }
      const onTouchStart = (e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY
      }
      const onTouchEnd = (e: TouchEvent) => {
        const delta = touchStartY.current - e.changedTouches[0].clientY
        if (Math.abs(delta) >= 30) goTo(current.current + (delta > 0 ? 1 : -1))
      }
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown" || e.key === "PageDown") {
          e.preventDefault()
          goTo(current.current + 1)
        }
        if (e.key === "ArrowUp" || e.key === "PageUp") {
          e.preventDefault()
          goTo(current.current - 1)
        }
      }

      container.addEventListener("wheel", onWheel, { passive: false })
      container.addEventListener("touchstart", onTouchStart, { passive: true })
      container.addEventListener("touchend", onTouchEnd, { passive: true })
      window.addEventListener("keydown", onKeyDown)

      return () => {
        container.removeEventListener("wheel", onWheel)
        container.removeEventListener("touchstart", onTouchStart)
        container.removeEventListener("touchend", onTouchEnd)
        window.removeEventListener("keydown", onKeyDown)
      }
    },
    { scope: containerRef, dependencies: [duration, ease] },
  )

  return (
    <div className="relative">
      <div ref={containerRef} className={cn("h-screen overflow-hidden overscroll-none", className)}>
        {children}
      </div>

      {sectionLabels && sectionLabels.length > 1 && (
        <nav
          className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
          aria-label="Section navigation"
        >
          <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] p-1.5 backdrop-blur-md">
            {sectionLabels.map((label, i) => (
              <button
                key={i}
                onClick={() => goToRef.current(i, true)}
                aria-label={label}
                className={cn(
                  "cursor-pointer rounded-full border-0 px-4 py-1.5 text-[0.65rem] font-normal tracking-widest whitespace-nowrap uppercase transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                  i === activeIndex
                    ? "bg-white/90 font-medium text-black"
                    : "bg-transparent text-white/40 hover:text-white/60",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  )
}
