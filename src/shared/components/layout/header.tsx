import { LocaleSelector } from "@/shared/components/header/locale-selector"
import { ThemeSelector } from "@/shared/components/header/theme-selector"

export default function Header() {
  return (
    <div className="fixed top-0 z-50 flex h-20 w-full justify-between border">
      <div>header</div>
      <div>
        <LocaleSelector />
        <ThemeSelector />
      </div>
    </div>
  )
}
