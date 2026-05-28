"use client"

import { Button } from "@/shared/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function AboutSection() {
  const t = useTranslations("homePage.aboutSection")
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
        <h1 className="text-2xl font-bold drop-shadow-lg lg:text-5xl">{t("title")}</h1>
        <p className="lg-text-md max-w-xl text-sm">{t("description")}</p>
        <Button className="rounded-full px-6 py-5 text-lg text-white">
          {t("button")}
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}
