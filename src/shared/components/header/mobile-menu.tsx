"use client"

import { useState } from "react"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/shared/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { menuItems } from "./nav-menu"

export function MobileMenu() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu size={24} />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 overflow-y-auto p-0">
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>

        <nav className="mt-6 flex flex-col py-6">
          {menuItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                className="hover:bg-muted flex w-full items-center justify-between px-6 py-3 text-base font-medium transition-colors"
              >
                {item.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${openSection === item.label ? "rotate-180" : ""}`}
                />
              </button>
              {openSection === item.label && (
                <ul className="bg-muted/50 px-4 pb-2">
                  {item.content.map((sub) => {
                    const Icon = sub.icon
                    return (
                      <li
                        key={sub.title}
                        className="hover:bg-muted flex cursor-pointer items-start gap-3 rounded-md px-3 py-3 transition-colors"
                      >
                        <div className="border-muted text-primary bg-background mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border">
                          <Icon size={16} />
                        </div>
                        <div>
                          <p className="text-sm leading-none font-medium">{sub.title}</p>
                          <p className="text-muted-foreground mt-1 text-sm leading-snug">
                            {sub.description}
                          </p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          ))}
          <div className="mt-4 border-t px-6 pt-4">
            <Button className="w-full rounded-full sm:hidden">Inquiry</Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
