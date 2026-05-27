"use client"

import { useEffect, useRef, useState } from "react"

export const CountUp = ({
  end,
  duration = 2,
  enableScrollSpy = false,
}: {
  end: number
  duration?: number
  enableScrollSpy?: boolean
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const start = () => {
      const startTime = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    if (!enableScrollSpy) {
      start()
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      start()
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, enableScrollSpy])

  return <span ref={ref}>{count}</span>
}
