import { CertificateCard } from "@/features/top/components/custom/certificate-card"
import { CometCard } from "@/features/top/components/effects/comet-card"

export default function CertificationSection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Certifications</h1>
      <div className="mb-10 max-w-xl text-center">
        TOMOSIA is constantly striving to improve the company and plans to obtain globally
        recognized certifications. Furthermore, TOMOSIA actively participates in collaborations and
        plans to grow together with others.
      </div>
      <div className="flex gap-8">
        <CometCard>
          <CertificateCard
            name="ISO 9001:2015"
            description="Quality Management System Standards"
            imageUrl="/certificate1.png"
          />
        </CometCard>
        <CometCard>
          <CertificateCard
            name="ISO 27001:2022"
            description="Information Security Management System Standards"
            imageUrl="/certificate2.png"
          />
        </CometCard>
        <CometCard>
          <CertificateCard
            name="JDXP"
            description="JDXP stands for Japan Digital Transformation (DX) Partners, and it is an alliance organization comprised of companies in Vietnam that provide DX development and DX solutions."
            imageUrl="/certificate3.png"
          />
        </CometCard>
      </div>
    </section>
  )
}
