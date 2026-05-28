"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel"
import { Button } from "@/shared/components/ui/button"
import { useTranslations } from "next-intl"

const serviceKeys = [
  { key: "web", image: "/service1.jpg" },
  { key: "chatbot", image: "/service2.jpg" },
  { key: "app", image: "/service3.png" },
  { key: "dx", image: "/service4.jpg" },
  { key: "ai", image: "/service5.png" },
  { key: "bigdata", image: "/service6.jpg" },
  { key: "mgpt", image: "/service7.jpeg" },
]

export default function ServiceSection() {
  const t = useTranslations("homePage.serviceSection")

  return (
    <section className="bg-border/50 flex min-h-screen w-full items-center justify-center px-6 pt-8 sm:px-20 2xl:px-64">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <div className="mb-1.5 flex flex-col items-center justify-center gap-1 sm:mb-4 sm:gap-3">
          <h2 className="text-xl font-medium lg:text-3xl">{t("heading")}</h2>
          <div className="lg:text-md max-w-3xl text-center text-xs">{t("description")}</div>
          <Button variant={"outline"} className="sm:text-md text-xs sm:px-4 sm:py-5">
            {t("cta")}
          </Button>
        </div>

        <CarouselContent className="-ml-4">
          {serviceKeys.map(({ key, image }) => (
            <CarouselItem key={key} className="pl-4 sm:basis-1/2 lg:basis-[34%] xl:basis-[23%]">
              <div
                className="group relative isolate h-[50vh] transform-gpu cursor-pointer overflow-hidden rounded-[24px] will-change-transform"
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
        <div className="mt-4 flex items-center justify-end">
          <div className="mr-2 flex gap-2">
            <CarouselPrevious className="static size-12 translate-y-0 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 lg:size-16" />
            <CarouselNext className="static size-12 translate-y-0 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 lg:size-16" />
          </div>
        </div>
      </Carousel>
    </section>
  )
}
