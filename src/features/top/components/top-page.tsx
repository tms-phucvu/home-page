import AboutSection from "@/features/top/components/sections/about-section"
import AchievementSection from "@/features/top/components/sections/achievement-section"
import CertificationSection from "@/features/top/components/sections/certification-section"
import FormSection from "@/features/top/components/sections/form-section"
import HeroSection from "@/features/top/components/sections/hero-section"
import ServiceSection from "@/features/top/components/sections/service-section"
import WhySection from "@/features/top/components/sections/why-section"
import SnapScroll from "@/features/top/components/effects/snap-scroll"
import Footer from "@/shared/components/layout/footer"
import { getTranslations } from "next-intl/server"

export default async function TopPage() {
  const t = await getTranslations("homePage.sectionLabels")
  return (
    <SnapScroll
      sectionLabels={[
        t("about"),
        t("services"),
        t("whyUs"),
        t("certifications"),
        t("achievements"),
        t("inquiry"),
      ]}
    >
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhySection />
      <CertificationSection />
      <AchievementSection />
      <FormSection />
      <Footer />
    </SnapScroll>
  )
}
