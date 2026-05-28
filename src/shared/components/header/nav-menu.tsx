"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/shared/components/ui/navigation-menu"
import { Button } from "@/shared/components/ui/button"
import {
  BookOpen,
  Users,
  Briefcase,
  Lightbulb,
  Code2,
  HeadphonesIcon,
  FileText,
  BarChart2,
  Bot,
  Wrench,
  Layers,
  Newspaper,
} from "lucide-react"
import { LucideIcon } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

type SubItem = {
  titleKey: string
  descKey: string
  icon: LucideIcon
}

type MenuItem = {
  section: string
  image: string
  items: SubItem[]
}

export const menuConfig: MenuItem[] = [
  {
    section: "about",
    image: "/nav_about.jpg",
    items: [
      { titleKey: "ourStory", descKey: "ourStory_desc", icon: BookOpen },
      { titleKey: "team", descKey: "team_desc", icon: Users },
      { titleKey: "careers", descKey: "careers_desc", icon: Briefcase },
    ],
  },
  {
    section: "services",
    image: "/nav_services.jpg",
    items: [
      { titleKey: "consulting", descKey: "consulting_desc", icon: Lightbulb },
      { titleKey: "development", descKey: "development_desc", icon: Code2 },
      { titleKey: "support", descKey: "support_desc", icon: HeadphonesIcon },
    ],
  },
  {
    section: "resources",
    image: "/nav_resources.jpg",
    items: [
      { titleKey: "blog", descKey: "blog_desc", icon: Newspaper },
      { titleKey: "docs", descKey: "docs_desc", icon: FileText },
      { titleKey: "cases", descKey: "cases_desc", icon: BarChart2 },
    ],
  },
  {
    section: "ai",
    image: "/nav_ai.jpg",
    items: [
      { titleKey: "overview", descKey: "overview_desc", icon: Bot },
      { titleKey: "tools", descKey: "tools_desc", icon: Wrench },
      { titleKey: "usecases", descKey: "usecases_desc", icon: Layers },
    ],
  },
]

function NavMenuSection({ section, image, items }: MenuItem) {
  const t = useTranslations(`layout.header.${section}`)

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="data-[state=open]:text-primary text-md bg-transparent font-normal">
        {t("label")}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="flex gap-8 px-10 py-3 xl:px-45 2xl:px-80">
          <div className="relative h-54 w-76 shrink-0 overflow-hidden rounded-md">
            <Image src={image} alt={t("btn")} fill className="object-cover" />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-3">
              <Button size="lg" className="w-full">
                {t("btn")}
              </Button>
            </div>
          </div>

          <ul className="grid grid-flow-col grid-rows-2 gap-4">
            {items.map(({ titleKey, descKey, icon: Icon }) => (
              <li
                key={titleKey}
                className="hover:bg-muted flex w-80 cursor-pointer items-start gap-3 rounded-md p-3 transition-colors"
              >
                <div className="border-muted text-primary mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-md border">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-md leading-none font-medium">{t(titleKey)}</p>
                  <p className="text-muted-foreground text-md mt-1 leading-snug">{t(descKey)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

export function NavMenu() {
  return (
    <NavigationMenu className="static">
      <NavigationMenuList className="gap-0.5 xl:gap-2">
        {menuConfig.map((item) => (
          <NavMenuSection key={item.section} {...item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
