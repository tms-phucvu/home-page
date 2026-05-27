"use client"

import { Button } from "@/shared/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hanoiskyline.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay gradient*/}
      <div className="to-background/30 absolute inset-0 bg-linear-to-b from-black/40 via-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center text-white">
        <h1 className="text-5xl font-bold drop-shadow-lg">TOMOSIA | 5.0 Solutions Company</h1>
        <p className="max-w-xl">
          {`TOMOSIA is a group of talented engineers with diverse information technology skills. Our
          mission is to leverage the individual knowledge and experience, as well as our teamwork
          and organizational learning, to derive optimal solutions to our clients' IT challenges.`}
        </p>
        <Button className="rounded-full px-6 py-5 text-lg text-white">
          Company Profile
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
