import RippleGrid from "@/features/top/components/effects/ripple-grid"
import { Bot, Mail, MapPin, Phone } from "lucide-react"
import { useTranslations } from "next-intl"

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  const t = useTranslations("layout.footer")
  const tNav = useTranslations("layout.header")

  return (
    <section className="bg-border grid h-screen w-full grid-cols-1 pt-16 sm:grid-cols-3">
      <div className="flex flex-col items-baseline justify-center px-3 max-md:text-sm sm:col-span-2 sm:px-16 xl:px-36">
        <div className="flex flex-col gap-8 max-md:gap-3">
          <h1 className="text-4xl font-bold xl:text-5xl">{t("tagline")}</h1>
          <div className="grid grid-cols-2 gap-5">
            <p>{tNav("about.label")}</p>
            <p>{tNav("services.label")}</p>
            <p>{tNav("resources.label")}</p>
            <p>{tNav("ai.label")}</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 max-md:mt-5 max-md:gap-1">
          <h1 className="text-2xl font-bold xl:text-3xl">{t("companyName")}</h1>
          <div className="flex flex-col gap-4">
            <p>{t("companyDescription")}</p>
          </div>

          {/* Contact Info */}
          <div className="mt-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Bot size={16} className="shrink-0 text-gray-500" />
              <span>TomoGPT - chatbot 5.0</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-gray-500" />
              <span>(+84) 243-201-6955</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gray-500" />
              <span>company@tomosia.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0 text-gray-500" />
              <span>{t("contactHq")}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 shrink-0 text-gray-500" />
              <span>{t("contactBranch")}</span>
            </div>
          </div>

          {/* Divider + Copyright */}
          <div className="mt-6 sm:col-span-1">
            <hr className="border-t border-gray-300" />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-500">{t("copyright")}</p>
              <div className="flex items-center gap-3 max-md:gap-1">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-gray-500 hover:text-gray-700"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-gray-500 hover:text-gray-700"
                >
                  <TikTokIcon />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-gray-500 hover:text-gray-700"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full items-center justify-center py-30 max-md:hidden">
        <RippleGrid
          enableRainbow={false}
          gridColor="#06B6D4"
          rippleIntensity={0.04}
          gridSize={16}
          gridThickness={16}
          mouseInteraction
          mouseInteractionRadius={1.6}
          opacity={1}
          fadeDistance={1.5}
          vignetteStrength={1.6}
          glowIntensity={0.4}
          gridRotation={45}
        />
      </div>
    </section>
  )
}
