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

type SubItem = {
  title: string
  description: string
  icon: LucideIcon
}

type MenuItem = {
  label: string
  card: {
    image: string
    buttonLabel: string
  }
  content: SubItem[]
}

const menuItems: MenuItem[] = [
  {
    label: "About",
    card: {
      image: "/nav_about.jpg",
      buttonLabel: "Learn More",
    },
    content: [
      { title: "Our Story", description: "Learn about our mission and values", icon: BookOpen },
      { title: "Team", description: "Meet the people behind the company", icon: Users },
      { title: "Careers", description: "Join us and grow together", icon: Briefcase },
    ],
  },
  {
    label: "Services",
    card: {
      image: "/nav_services.jpg",
      buttonLabel: "View Services",
    },
    content: [
      { title: "Consulting", description: "Expert guidance for your business", icon: Lightbulb },
      { title: "Development", description: "End-to-end software solutions", icon: Code2 },
      { title: "Support", description: "24/7 technical assistance", icon: HeadphonesIcon },
    ],
  },
  {
    label: "Resources",
    card: {
      image: "/nav_resources.jpg",
      buttonLabel: "Browse Resources",
    },
    content: [
      { title: "Blog", description: "Insights and industry news", icon: Newspaper },
      { title: "Documentation", description: "Guides and API references", icon: FileText },
      { title: "Case Studies", description: "Real-world success stories", icon: BarChart2 },
    ],
  },
  {
    label: "AI Driven Development",
    card: {
      image: "/nav_ai.jpg",
      buttonLabel: "Explore AI",
    },
    content: [
      { title: "AI Overview", description: "How we integrate AI into development", icon: Bot },
      { title: "Tools", description: "Our AI-powered toolset", icon: Wrench },
      { title: "Use Cases", description: "Practical AI applications", icon: Layers },
    ],
  },
]

export function NavMenu() {
  return (
    <NavigationMenu className="static">
      <NavigationMenuList className="gap-2">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuTrigger className="hover:text-primary text-md bg-transparent font-normal">
              {item.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex gap-8 px-80 py-3">
                <div className="relative h-54 w-76 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={item.card.image}
                    alt={item.card.buttonLabel}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-3">
                    <Button size="lg" className="w-full">
                      {item.card.buttonLabel}
                    </Button>
                  </div>
                </div>

                <ul className="grid grid-flow-col grid-rows-2 gap-4">
                  {item.content.map((sub) => {
                    const Icon = sub.icon
                    return (
                      <li
                        key={sub.title}
                        className="hover:bg-muted flex w-80 cursor-pointer items-start gap-3 rounded-md p-3 transition-colors"
                      >
                        <div className="border-muted text-primary mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-md border">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-md leading-none font-medium">{sub.title}</p>
                          <p className="text-muted-foreground text-md mt-1 leading-snug">
                            {sub.description}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
