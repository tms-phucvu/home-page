"use client"
import Image from "next/image"
import { Rocket, Grid, ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel"
import { useTranslations } from "next-intl"

const projectKeys = [
  { key: "aiInterview", image: "/project1.png" },
  { key: "aiResponse", image: "/project2.png" },
  { key: "gulliver", image: "/project3.jpg" },
  { key: "wakumo", image: "/project4.png" },
  { key: "qlear", image: "/project5.png" },
  { key: "coincome", image: "/project6.png" },
  { key: "kiroku", image: "/project7.png" },
]

export default function AchievementSection() {
  const t = useTranslations("homePage.achievementSection")

  return (
    <section className="bg-border/50 flex min-h-screen w-full items-center justify-center px-4 sm:px-18 lg:px-36">
      <Carousel opts={{ align: "start" }} className="w-full">
        <div className="mb-2 flex items-center justify-between xl:mb-8">
          <h2 className="text-2xl font-medium xl:text-5xl">{t("heading")}</h2>
          <div className="flex gap-2">
            <CarouselPrevious className="static h-10 w-10 translate-y-0 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50" />
            <CarouselNext className="static h-10 w-10 translate-y-0 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50" />
          </div>
        </div>

        <CarouselContent className="-ml-4">
          {/* Banner Card */}
          <CarouselItem className="pl-4 md:basis-1/2 lg:basis-[32%] xl:basis-[29%]">
            <div
              className="relative flex h-[54vh] flex-col justify-between overflow-hidden rounded-[24px] p-8 text-white"
              style={{
                backgroundColor: "#073d4f",
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Rocket className="h-6 w-6 text-cyan-300" />
              </div>
              <div className="my-auto space-y-4">
                <h3 className="text-4xl leading-tight font-medium tracking-tight">
                  {t("bannerTitle")}
                </h3>
                <p className="text-sm leading-relaxed font-light text-white/70">
                  {t("bannerDesc")}
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Grid className="h-5 w-5 text-white/70" />
              </div>
            </div>
          </CarouselItem>

          {/* Project Cards */}
          {projectKeys.map(({ key, image }) => (
            <CarouselItem key={key} className="pl-4 sm:basis-1/2 lg:basis-[27%] xl:basis-[20%]">
              <div
                className="group relative isolate h-[54vh] transform-gpu cursor-pointer overflow-hidden rounded-[24px] will-change-transform"
                tabIndex={0}
                onMouseEnter={(e) => {
                  const focused = document.activeElement
                  if (focused && focused !== e.currentTarget) {
                    ;(focused as HTMLElement).blur()
                  }
                }}
              >
                <Image
                  src={image}
                  alt={t(key)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 scale-110 bg-linear-to-b from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/90 group-focus:from-black/70 group-focus:via-black/80 group-focus:to-black/90" />
                <div className="absolute top-0 right-0 left-0 p-7">
                  <span className="block text-lg font-medium text-white transition-opacity duration-300">
                    {t(key)}
                  </span>
                  <p className="mt-2 translate-y-2 text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                    {t(`${key}_desc`)}
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 left-0 translate-y-2 p-7 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                  <div className="text-primary flex items-center gap-2 text-sm font-medium">
                    {t("readMore")}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
