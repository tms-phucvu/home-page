import { defineRouting } from "next-intl/routing"

export const LOCALES_AVAILABLE = ["en", "vi"]

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES_AVAILABLE,

  // Used when no locale matches
  defaultLocale: "en",
})
