"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { LocaleSelector } from "@/shared/components/header/locale-selector"
import { ThemeSelector } from "@/shared/components/header/theme-selector"
import { Button } from "@/shared/components/ui/button"
import { NavMenu } from "@/shared/components/header/nav-menu"
import { Search } from "lucide-react"

export default function Header() {
  const { resolvedTheme } = useTheme()

  return (
    <div className="bg-background fixed top-0 z-50 flex h-20 w-full items-center justify-between px-36">
      <div className="flex items-center gap-16">
        <Image
          src={resolvedTheme === "dark" ? "/logo_dark.png" : "/logo_light.png"}
          alt="Logo"
          width={180}
          height={60}
          priority
        />
        <NavMenu />
      </div>
      <div className="flex h-14 items-center gap-2">
        <LocaleSelector />
        <ThemeSelector />
        <Button variant="outline" size="icon-lg" className="relative rounded-full">
          <Search />
          <span className="sr-only">Search</span>
        </Button>
        <Button size={"lg"} className="rounded-full px-8 py-5 text-lg">
          Inquiry
        </Button>
      </div>
    </div>
  )
}
