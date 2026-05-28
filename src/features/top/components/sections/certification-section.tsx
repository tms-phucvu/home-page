import { CertificateCard } from "@/features/top/components/custom/certificate-card"
import { CometCard } from "@/features/top/components/effects/comet-card"
import Stack from "@/features/top/components/effects/stack"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"

const enMobileImages = [
  "/mobile_certificate1.png",
  "/mobile_certificate2.png",
  "/mobile_certificate3.png",
]

const jaMobileImages = [
  "/ja_mobile_certificate1.png",
  "/ja_mobile_certificate2.png",
  "/ja_mobile_certificate3.png",
]

const certKeys = ["iso9001", "iso27001", "jdxp"] as const

const certImages: Record<string, string> = {
  iso9001: "/certificate1.png",
  iso27001: "/certificate2.png",
  jdxp: "/certificate3.png",
}

export default function CertificationSection() {
  const t = useTranslations("homePage.certificationSection")
  const locale = useLocale()

  const mobileImages = locale === "ja" ? jaMobileImages : enMobileImages

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-2xl font-bold md:text-5xl">{t("heading")}</h1>
      <div className="mb-10 max-w-md text-center text-xs md:max-w-xl md:text-lg">
        {t("description")}
      </div>

      {/* Mobile: Stack */}
      <div className="h-55 w-72 sm:h-70 sm:w-93 xl:hidden">
        <Stack
          key={locale}
          sensitivity={160}
          sendToBackOnClick
          cards={mobileImages.map((src, i) => (
            <div key={i} className="relative h-full w-full">
              <Image src={src} alt={`certificate-${i + 1}`} fill className="object-cover" />
            </div>
          ))}
          autoplay
          autoplayDelay={3000}
          pauseOnHover
        />
      </div>

      {/* Desktop: CometCard */}
      <div className="hidden gap-8 xl:flex">
        {certKeys.map((key) => (
          <CometCard key={key}>
            <CertificateCard
              name={t(key)}
              description={t(`${key}_desc`)}
              imageUrl={certImages[key]}
            />
          </CometCard>
        ))}
      </div>
    </section>
  )
}
