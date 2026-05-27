import MagicBento from "@/features/top/components/effects/magic-bento"

export default function WhySection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Why TOMOSIA</h1>
      <MagicBento
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect
        spotlightRadius={400}
        particleCount={12}
        glowColor="132, 0, 255"
        disableAnimations={false}
      />
    </section>
  )
}
