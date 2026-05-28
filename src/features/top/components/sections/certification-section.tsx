import { CertificateCard } from "@/features/top/components/custom/certificate-card"
import { CometCard } from "@/features/top/components/effects/comet-card"
import Stack from "@/features/top/components/effects/stack"
import Image from "next/image"

const certificates = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System Standards",
    imageUrl: "/certificate1.png",
  },
  {
    name: "ISO 27001:2022",
    description: "Information Security Management System Standards",
    imageUrl: "/certificate2.png",
  },
  {
    name: "JDXP",
    description:
      "JDXP stands for Japan Digital Transformation (DX) Partners, and it is an alliance organization comprised of companies in Vietnam that provide DX development and DX solutions.",
    imageUrl: "/certificate3.png",
  },
]

const mobileImages = [
  "/mobile_certificate1.png",
  "/mobile_certificate2.png",
  "/mobile_certificate3.png",
]

export default function CertificationSection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-2xl font-bold md:text-5xl">Certifications</h1>
      <div className="mb-10 max-w-md text-center text-xs md:max-w-xl md:text-lg">
        TOMOSIA is constantly striving to improve the company and plans to obtain globally
        recognized certifications. Furthermore, TOMOSIA actively participates in collaborations and
        plans to grow together with others.
      </div>

      {/* Mobile: Stack */}
      <div className="h-55 w-72 sm:h-70 sm:w-93 xl:hidden">
        <Stack
          randomRotation
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
        {certificates.map((cert) => (
          <CometCard key={cert.name}>
            <CertificateCard
              name={cert.name}
              description={cert.description}
              imageUrl={cert.imageUrl}
            />
          </CometCard>
        ))}
      </div>
    </section>
  )
}
