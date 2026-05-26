"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { LocaleSelector } from "@/shared/components/header/locale-selector"
import { ThemeSelector } from "@/shared/components/header/theme-selector"
import { Button } from "@/shared/components/ui/button"
import { NavMenu } from "@/shared/components/header/nav-menu"
import { MobileMenu } from "@/shared/components/header/mobile-menu"
import { Search } from "lucide-react"

export default function Header() {
  const { theme } = useTheme()

  return (
    <div className="bg-background shadow-foreground/10 fixed top-0 z-50 flex h-16 w-full items-center justify-between px-4 shadow-lg md:px-10 lg:h-20 xl:px-36">
      <div className="flex items-center gap-6 xl:gap-16">
        <Image
          src={theme === "dark" ? "/logo_dark.png" : "/logo_light.png"}
          alt="Logo"
          width={theme === "dark" ? 126 : 120}
          height={48}
          className="lg:w-45"
          priority
        />
        <div className="hidden lg:block">
          <NavMenu />
        </div>
      </div>

      <div className="flex h-14 items-center gap-1 lg:gap-2">
        <LocaleSelector />
        <ThemeSelector />
        <Button
          variant="outline"
          size="icon-lg"
          className="relative rounded-full max-md:border-none"
        >
          <Search />
          <span className="sr-only">Search</span>
        </Button>
        <Button
          size="lg"
          className="hidden rounded-full px-5 py-4 text-base sm:flex lg:px-8 lg:py-5 lg:text-lg"
        >
          Inquiry
        </Button>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  )
}
