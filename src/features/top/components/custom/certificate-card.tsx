import React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

interface CertificateProps {
  name: string
  description: string
  imageUrl: string
}

export const CertificateCard: React.FC<CertificateProps> = ({ name, description, imageUrl }) => {
  const t = useTranslations("homePage.certificationSection")
  return (
    <div className="h-66 w-88 rounded-xs bg-[#1F2121] p-2 text-white/80">
      <div className="border-primary flex h-full w-full flex-col items-center justify-center gap-4 rounded-md border">
        <div className="flex flex-col items-center justify-center">
          <p className="text-[8px] font-semibold tracking-[0.2em] uppercase">{t("title")}</p>
          <h2 className="text-xl leading-tight font-bold">{name}</h2>
        </div>
        <p className="px-2 text-center text-xs leading-relaxed">{description}</p>
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="mt-2 rounded-sm object-cover"
        />
      </div>
    </div>
  )
}
